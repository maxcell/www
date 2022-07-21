/** @jsx h */
import { h, Fragment } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";
import getShareImage from "@jlengstorf/get-share-image";
import Callout from "./components/Callout.js"; // Remember local files requires extensions
import Footer from "./components/Footer.js";

const components = {
  Callout,
  inlineCode: (props) => <code className="bg-gray-100" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="w-4/5 border-purple-500 border-l-4 pb-2 px-4 mx-auto my-4"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc list-inside mt-2 ml-4" {...props} />,
  "li.ul": (props) => <ul className="list-disc list-inside ml-5" {...props} />,
  ol: (props) => (
    <ol className="list-decimal list-inside mt-2 ml-4" {...props} />
  ),
  "li.ol": (props) => <ol className="list-disc list-inside ml-5" {...props} />,
  a: (props) => <a className="text-lg text-purple-700 underline" {...props} />,
  p: (props) => <p className="text-lg pt-4" {...props} />,
  h1: (props) => <h1 className="font-extrabold text-4xl mt-8" {...props} />,
  h2: (props) => <h2 className="font-extrabold text-3xl mt-6" {...props} />,
  h3: (props) => <h3 className="font-extrabold text-2xl mt-4" {...props} />,
  h4: (props) => <h4 className="font-extrabold text-xl mt-4" {...props} />,
  h5: (props) => <h5 className="font-extrabold text-lg mt-4" {...props} />,
  wrapper: (props) => {
    const figureItOut = getShareImage.default || getShareImage;
    const socialImage = figureItOut({
      title: props.title,
      titleExtraConfig: "_bold",
      tagline: "",
      cloudName: "maxcell",
      imagePublicID: "prince_social_template",
      titleFont: "roboto",
      textColor: "222426",
      textAreaWidth: 616,
      textLeftOffset: 624,
    });

    const thumbnailSrc = props.thumbnail || false;

    return (
      <Fragment>
        <Helmet>
          <meta name="og:image" content={thumbnailSrc || socialImage} />
          <meta name="twitter:image" content={thumbnailSrc || socialImage} />
        </Helmet>
        <article className="prose max-w-none">
          {props.title ? (
            <h2 className="font-extrabold text-3xl mt-6">{props.title}</h2>
          ) : null}
          {props.children}
        </article>
      </Fragment>
    );
  },
  codeblock: (props) => (
    <div
      className="my-4 rounded shadow overflow-auto"
      style={{ backgroundColor: "#011627" }}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
};

function NavLink(props) {
  return (
    <a
      {...props}
      className={`mr-6 text-2xl focus:underline hover:underline ${props.className}`}
    />
  );
}

// Interesting that you can't use <></>
// Transpiling related:
// Note that most modern transpilers allow you to use a shorter syntax for Fragments.
// https://preactjs.com/guide/v10/components#fragments
export default function PageWrapper(props) {
  const title = props.title || "Prince Wilson - Developer";
  const description =
    props.description ||
    "An organically growing notebook of thoughts and learnings!";
  return (
    <Fragment>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
        <style>
          {`
            .mdx-highlight-line {
              background-color: #465671;
              display: block;
            }

            body {
              font-family: IBM Plex Sans;
            }
          `}
        </style>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:image"
          content="https://res.cloudinary.com/maxcell/image/upload/v1658435755/main_social.png"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/maxcell/image/upload/v1658435755/main_social.png"
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:title" content={props.title} />
        <meta name="og:type" content="website" />
        <meta name="twitter:creator" content="@maxcell" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
        <nav className="mt-10 mb-4 flex justify-between">
          <NavLink href="/" className="font-bold">
            Prince
          </NavLink>
          <ul className="flex">
            <li>
              <NavLink className="font-bold" href="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold" href="/garden">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold" href="/blender">
                Blender
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Does MDXProvider only render on MDX Pages */}
        <MDXProvider components={components}>
          <main>{props.children}</main>
        </MDXProvider>
        <hr className="mt-10 mb-4 divide-y-4 border-purple-500 divide-dashed" />
        <Footer />
      </div>
    </Fragment>
  );
}
