export const sourceData = async ({ createPage }) => {
  console.log('====Inside content====')
  await createPage({
    module: 'import {h} from "preact"; export default function test() { return <div>hello</div>}',
    slug: 'beef',
    data: {}
  })
}