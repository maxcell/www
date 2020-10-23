/** @jsx h */
import { h, Fragment } from 'preact';

const Index = (props) => {
  return (
    <Fragment>
      <div>
        <h2>Welcome to my side of the Internet!</h2>
        <p>I have no good text here so I am just going to write till I have no more words to write down. Isn't it great to have huge, runon sentences? Yeah probably not.</p>
      </div>

      <ol className="list-disc list-inside">
        {props.posts.map((post) => (
          <li><a href={post.slug}>{post.title}</a></li>
        ))}
      </ol>
    </Fragment>
  )
}

export default Index;