// Credits to Chris Biscardi
// What a gem
import frontmatter from "gray-matter";
import mdx from "@mdx-js/mdx";
import cloudinaryPlugin from "rehype-local-image-to-cloudinary";
import { fetchMdxFromDisk } from "@toastdotdev/mdx";
import rehypePrismMdx from "rehype-prism-mdx";
import rehypeSlug from "rehype-slug";
import rehypeLink from "rehype-autolink-headings";
import nightOwlTheme from "./nightOwlTheme.js";

const IMAGE_PATH = (filename) => {
  const indexStringSize = "index.mdx".length;
  const directoryRoot = filename.slice(0, -indexStringSize);
  return directoryRoot;
};

export const sourceData = async ({ setDataForSlug }) => {
  const mdxObjs = await fetchMdxFromDisk({ directory: "./blender-content/" });

  return await Promise.all(
    mdxObjs.map(async ({ file, filename }) => {
      const { data, content } = frontmatter(file);
      let compiledMdx = null;
      try {
        compiledMdx = await mdx(content, {
          rehypePlugins: [
            [
              rehypePrismMdx,
              {
                theme: nightOwlTheme,
              },
            ],
            [
              cloudinaryPlugin,
              {
                baseDir: IMAGE_PATH(filename), // change this
                uploadFolder: "blender",
              },
            ],
            rehypeSlug,
            [
              rehypeLink,
              {
                behavior: "wrap",
                properties: {
                  className: "text-black underline",
                },
              },
            ],
          ],
        });
      } catch (e) {
        // Console.error for some reason won't output?
        console.log(e);
      }

      await setDataForSlug(data.slug, {
        component: {
          mode: "source",
          value: `/** @jsx mdx */
        import {mdx} from '@mdx-js/preact';
        ${compiledMdx}`,
        },
        data,
      });
      // Surfaces data for us to use in toast.js
      return data;
    })
  ).then((posts) => {
    return posts.filter((post) => !(post.draft || post.hidden));
  });
};
