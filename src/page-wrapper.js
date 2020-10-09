/** @jsx h */
import {h} from 'preact';
import {MDXProvider} from '@mdx-js/preact';

const components = {}

export default function PageWrapper({children}) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}