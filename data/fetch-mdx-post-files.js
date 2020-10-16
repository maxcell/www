// Credits to Chris Biscardi
// What a gem
import { promises as fs } from 'fs'; // TIL
import frontmatter from 'gray-matter';
import mdx from '@mdx-js/mdx';
import rehypePrismMdx from 'rehype-prism-mdx';
import cloudinaryPlugin from 'rehype-local-image-to-cloudinary';

const BASE_CONTENT_PATH = './content/';
const MDX_FILE_PATH = (filename) => `${BASE_CONTENT_PATH}${filename}/index.mdx`
const IMAGE_PATH = (filename) => `${BASE_CONTENT_PATH}${filename}/`

export const sourceData = async ({ setDataForSlug }) => {
  const files = await fs.readdir(BASE_CONTENT_PATH);

  return await Promise.all(
    files.map(async (filename) => {
      const mdxFile = await fs.readFile(MDX_FILE_PATH(filename))
      const { data, content } = frontmatter(mdxFile)
      let compiledMdx = null;
      try {
        compiledMdx = await mdx(content, {
          rehypePlugins: [
            rehypePrismMdx,
            [
              cloudinaryPlugin, {
                baseDir: IMAGE_PATH(filename),
                uploadFolder: 'prince.dev'
              }
            ]
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