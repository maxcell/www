import * as PostSource from './data/fetch-mdx-post-files.js'

export const sourceData = async ({ setDataForSlug }) => {
  const postsData = await PostSource.sourceData({ setDataForSlug })

  await setDataForSlug("/", { data: { posts: postsData } })
}