/** @jsx h */
import { h, Fragment } from 'preact';

import getShareImage from '@jlengstorf/get-share-image';
const figureItOut = getShareImage.default || getShareImage


const LiveStream = ({ isLive = false }) => {
  if (isLive) {
    return (
      <div>
        WE'RE LIVE NOW FOOLS
      </div>
    )
  } else {
    return (
      <div>
        <div style={{
          backgroundColor: 'grey',
          width: '800px',
          height: '600px'
        }}></div>
        <p>Oh wow what a cool stream dude</p>
      </div>
    )
  }
}

const StreamCard = ({ title, url, description }) => {

  const socialImage = figureItOut({
    title: title,
    titleExtraConfig: '_bold',
    tagline: '',
    cloudName: 'maxcell',
    imagePublicID: 'stream_thumbnail_uzevah',
    titleFont: 'roboto',
    titleFontSize: '15',
    textColor: '222426',
    textAreaWidth: 215,
    textLeftOffset: 22,
    titleBottomOffset: 93,
    imageHeight: 156,
    imageWidth: 277
  })

  return (
    <div style={{
      width: '300px',
    }}>
      <img src={socialImage} width="300" />
      <a href={url}>
        {title}
      </a>
      <p>{description}</p>
    </div>

  )
}

const StreamCards = ({ streams }) => {

  const cards = streams.map(({ slug, title, description }) => (
    <StreamCard
      url={slug}
      title={title}
      description={description || ''}
    />
  ))

  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      maxWidth: '1000px',
      flexWrap: 'wrap'
    }}>
      {cards}
      <StreamCard
        url="https://www.twitch.tv/videos/798647030"
        title="Smart Pointers through the Rust PL book!"
        description="Smart pointers are a way for us to instead of using the stack we will use the heap"
      />
      <StreamCard
        url="https://www.twitch.tv/videos/798647030"
        title="Smart Pointers through the Rust PL book!"
        description="Smart pointers are a way for us to instead of using the stack we will use the heap"
      />
      <StreamCard
        url="https://www.twitch.tv/videos/798647030"
        title="Smart Pointers through the Rust PL book!"
        description="Smart pointers are a way for us to instead of using the stack we will use the heap"
      />
      <StreamCard
        url="https://www.twitch.tv/videos/798647030"
        title="Smart Pointers through the Rust PL book!"
        description="Smart pointers are a way for us to instead of using the stack we will use the heap"
      />
      <StreamCard
        url="https://www.twitch.tv/videos/798647030"
        title="Smart Pointers through the Rust PL book!"
        description="Smart pointers are a way for us to instead of using the stack we will use the heap"
      />
      <StreamCard
        url="https://www.twitch.tv/videos/798647030"
        title="Smart Pointers through the Rust PL book!"
        description="Smart pointers are a way for us to instead of using the stack we will use the heap"
      />
      <StreamCard
        url="https://www.twitch.tv/videos/798647030"
        title="Smart Pointers through the Rust PL book!"
        description="Smart pointers are a way for us to instead of using the stack we will use the heap"
      />

    </div>
  )
}


const Streaming = (props) => {
  return (
    <Fragment>
      <h3>Latest Stream</h3>
      <LiveStream />
      <h3>Past recordings</h3>
      <StreamCards streams={props.streams} />
      <h3>Stream Setup</h3>
      <p>
        Fill this shit out please
      </p>
    </Fragment>
  )
}

export default Streaming