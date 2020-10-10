/** @jsx h */
import { h, Fragment } from 'preact';
import { MDXProvider } from '@mdx-js/preact';
import Callout from './components/Callout.js' // Remember local files requires extensions

const components = {
  Callout,
  wrapper: (props) => {
    return (
      <main>
        {props.title ? <h2>{props.title}</h2> : null}
        {props.children}
      </main>
    )
  },
  pre: props => {
    return (
      <div
        style={{
          borderRadius: '.3em',
          boxShadow: '0 10px 24px rgba(0,0,0,.25)',
          backgroundColor: '#011627',
          padding: '1em',
          margin: '2em 0'
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: props.children.props.children
          }}
        />
      </div>
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
      <div style={{ width: '70ch', margin: '0 auto', paddingLeft: '1.0875rem', paddingRight: '1.0875rem' }}>
        <nav>
          <a href="/">Prince</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
        </nav>
        {/* Does MDXProvider only render on MDX Pages */}
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
      </div>
    </Fragment>
  )
}