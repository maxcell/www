/** @jsx h */
import { h, Fragment } from 'preact';
import RightDoubleChevron from '../components/RightDoubleChevron.js';

const Index = (props) => {
  return (
    <Fragment>
      <div>
        <h2 className="mb-6 font-bold text-gray-900 text-3xl">Welcome to my side of the Internet!</h2>
        <p className="text-lg">I am a full-stack web developer based in NYC. I love building things and making sure to bring people together around accessibility and security. Beyond the work I do, I love corgis.</p>
      </div>

      <h3 className="mt-10 mb-4 text-md font-bold uppercase tracking-wider">Featured Articles</h3>
      <ol className="ml-2 list-none list-inside">
        {props.posts.map((post) => (
          <li className="mt-5 mb-5 first:mt-0 last:mb-0">
            <a className="underline text-lg text-gray-900" href={post.slug}>
              {post.title}
            </a>
          </li>
        ))}
        <li><a className="font-medium group" href="/garden">Browse all articles<RightDoubleChevron className="h-4 inline transition transform duration-300 ease-in-out group-hover:translate-x-2" /></a></li>
      </ol>

      <h3 className="mt-8 mb-4 text-md font-bold uppercase tracking-wider">Speaking Engagements</h3>
      <ol className="ml-2 list-none list-inside">
        {props.engagements.map((engagement) => (
          <li className="mt-5 mb-5 first:mt-0 last:mb-0">
            <a className="underline text-lg text-gray-900" href={engagement.url}>
              {engagement.title} ({engagement.type})
            </a>
          </li>
        ))}
      </ol>
    </Fragment>
  )
}

export default Index;