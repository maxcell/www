import * as PostSource from './utils/fetch-mdx-post-files.js'

export const sourceData = async ({ createPage }) => {
  console.log('==== Source Data ====')
  const postsData = await PostSource.sourceData({ createPage })
  console.log(postsData)
}