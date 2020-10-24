/** @jsx h */
import { h, Fragment } from 'preact';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/preact';
import Callout from './components/Callout.js' // Remember local files requires extensions

const components = {
  Callout,
  wrapper: (props) => {
    return (
      <article className="prose max-w-none">
        {props.title ? <h2>{props.title}</h2> : null}
        {props.children}
      </article>
    )
  },
  codeblock: props => <pre dangerouslySetInnerHTML={{ __html: props.children }} />,
}


function NavLink(props) {
  return (
    <a {...props} className={`mr-6 text-lg focus:underline hover:underline ${props.className}`} />
  )
}

// Interesting that you can't use <></>
// Transpiling related:
// Note that most modern transpilers allow you to use a shorter syntax for Fragments.
// https://preactjs.com/guide/v10/components#fragments
export default function PageWrapper(props) {
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="/style.css" />
        <style dangerouslySetInnerHTML={
          {
            __html: `
            .mdx-highlight-line {
              padding: 0 2rem;
              margin: 0 -2rem;
              background-color: #465671;
            }

            pre pre::-webkit-scrollbar {
              box-shadow: transparent;
            }
          `
          }} />
      </Helmet>
      <div
        className="container mx-auto px-4 max-w-3xl"

      >
        <nav className="mt-4 mb-4 flex justify-between">
          <NavLink href="/" className="text-purple-600 font-bold">Prince</NavLink>
          <ul className="flex">
            <li><NavLink href="#">About</NavLink></li>
            <li><NavLink href="#">Blog</NavLink></li>
          </ul>
        </nav>
        {/* Does MDXProvider only render on MDX Pages */}
        <MDXProvider components={components}>
          <main {...props} />
        </MDXProvider>
      </div>
    </Fragment>
  )
}