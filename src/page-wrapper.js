/** @jsx h */
import { h, Fragment } from 'preact';
import { MDXProvider } from '@mdx-js/preact';

const components = {
  wrapper: (props) => {
    return (
      <main>
        {props.title ? <h2>{props.title}</h2> : null}
        {props.children}
      </main>
    )
  }
}

// Interesting that you can't use <></>
// Transpiling related:
// Note that most modern transpilers allow you to use a shorter syntax for Fragments.
// https://preactjs.com/guide/v10/components#fragments
export default function PageWrapper({ children }) {
  return (
    <Fragment>
      <nav>
        <a href="/">Prince</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
      </nav>
      {/* Does MDXProvider only render on MDX Pages */}
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
    </Fragment>
  )
}