import * as PostSource from './utils/fetch-mdx-post-files.js'

export const sourceData = async ({ createPage, setData }) => {
  const postsData = await PostSource.sourceData({ createPage })

  setData({ slug: "/", data: { posts: postsData } })
}