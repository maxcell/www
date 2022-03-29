/** @jsx h */
import { h, Fragment } from "preact";

const Index = (props) => {
  return (
    <Fragment>
      <h1 className="mb-6 font-bold text-gray-900 text-3xl">
        List of Blender Projects
      </h1>
      <ol className="mt-8 list-none list-inside">
        {props.posts.map((post) => (
          <li className="mt-5 mb-5 first:mt-0 last:mb-0">
            <a
              className="underline text-lg font-bold text-gray-900"
              href={post.slug}
            >
              {post.title}
            </a>
          </li>
        ))}
      </ol>
    </Fragment>
  );
};

export default Index;
