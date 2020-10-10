// Credits to Chris Biscardi
// What a gem
import { promises as fs } from 'fs'; // TIL
import frontmatter from 'gray-matter';
import globby from 'globby';
import mdx from '@mdx-js/mdx';

export const sourceData = async ({ createPage }) => {
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
        compiledMdx = await mdx(content)
      } catch (e) {
        // Console.error for some reason won't output?
        console.log(e)
      }

      await createPage({
        module: `/** @jsx mdx */
        import {mdx} from '@mdx-js/preact';
        ${compiledMdx}`,
        slug: data.slug,
        data
      })

      // Surfaces data for us to use in toast.js
      return data
    })
  )
}