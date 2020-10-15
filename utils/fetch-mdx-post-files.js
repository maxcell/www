// Credits to Chris Biscardi
// What a gem
import { promises as fs } from 'fs'; // TIL
import frontmatter from 'gray-matter';
import globby from 'globby';
import mdx from '@mdx-js/mdx';
import rehypePrismMdx from 'rehype-prism-mdx';

export const sourceData = async ({ setDataForSlug }) => {
  const filenames = await globby('content', {
    expandDirectories: {
      extensions: ['mdx']
    }
  })

  return await Promise.all(
    filenames.map(async (filename) => {
      const file = await fs.readFile(filename, 'utf-8')
      const { data, content } = frontmatter(file)

      let compiledMdx = null;
      try {
        compiledMdx = await mdx(content, {
          rehypePlugins: [
            rehypePrismMdx
          ]
        })
      } catch (e) {
        // Console.error for some reason won't output?
        console.log(e)
      }

      await setDataForSlug(data.slug, {
        component: {
          mode: 'source',
          value: `/** @jsx mdx */
        import {mdx} from '@mdx-js/preact';
        ${compiledMdx}`,
          data
        }
      })

      // Surfaces data for us to use in toast.js
      return data
    })
  )
}