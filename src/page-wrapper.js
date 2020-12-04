/** @jsx h */
import { h, Fragment } from 'preact';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/preact';
import getShareImage from '@jlengstorf/get-share-image';
import Callout from './components/Callout.js' // Remember local files requires extensions

const components = {
  Callout,
  p: props => <p className="text-lg pt-4" {...props} />,
  h1: props => <h1 className="font-extrabold text-4xl mt-8" {...props} />,
  h2: props => <h2 className="font-extrabold text-3xl mt-6" {...props} />,
  h3: props => <h3 className="font-extrabold text-2xl mt-4" {...props} />,
  h4: props => <h4 className="font-extrabold text-xl mt-4" {...props} />,
  h5: props => <h5 className="font-extrabold text-lg mt-4" {...props} />,
  wrapper: (props) => {
    const figureItOut = getShareImage.default || getShareImage
    const socialImage = figureItOut({
      title: props.title,
      titleExtraConfig: '_bold',
      tagline: '',
      cloudName: 'maxcell',
      imagePublicID: 'prince_social_template',
      titleFont: 'roboto',
      textColor: '222426',
      textAreaWidth: 616,
      textLeftOffset: 624,
    })

    return (
      <Fragment>
        <Helmet>
          <meta name="image" content={socialImage} />
        </Helmet>
        <article className="prose max-w-none">
          {props.title ? <h2 className="font-extrabold text-3xl mt-6">{props.title}</h2> : null}
          {props.children}
        </article>
      </Fragment>
    )
  },
  codeblock: props => (
    <div
      className="mt-4 p-4"
      style={{ backgroundColor: "#011627", 'overflow': 'auto', 'boxShadow': '0 10px 24px rgba(0,0,0,.25)' }}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
}


function NavLink(props) {
  return (
    <a {...props} className={`mr-6 text-2xl focus:underline hover:underline ${props.className}`} />
  )
}

// Interesting that you can't use <></>
// Transpiling related:
// Note that most modern transpilers allow you to use a shorter syntax for Fragments.
// https://preactjs.com/guide/v10/components#fragments
export default function PageWrapper(props) {
  console.log({ props })
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="/style.css" />
        <style>
          {`
            .mdx-highlight-line {
              background-color: #465671;
              display: block;
            }
          `
          }
        </style>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="image" content="https://res.cloudinary.com/maxcell/image/upload/v1579584116/main_social.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={props.title} />
      </Helmet>
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div class="max-w-1xl mx-auto"> */}
        <nav className="mt-10 mb-4 flex justify-between">
          <NavLink href="/" className="font-bold">Prince</NavLink>
          <ul className="flex">
            <li><NavLink className="font-bold" href="#">About</NavLink></li>
            <li><NavLink className="font-bold" href="/garden">Blog</NavLink></li>
          </ul>
        </nav>
        {/* Does MDXProvider only render on MDX Pages */}
        <MDXProvider components={components}>
          <main {...props} />
        </MDXProvider>
        {/* </div> */}
      </div>
    </Fragment>
  )
}