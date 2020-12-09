/** @jsx h */
import { h, Fragment } from 'preact';

import getShareImage from '@jlengstorf/get-share-image';
const figureItOut = getShareImage.default || getShareImage

// Come back and fill this out
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

const HeroCard = ({ title, url, description }) => {
  const socialImage = figureItOut({
    title: title,
    titleExtraConfig: '_bold',
    tagline: '',
    cloudName: 'maxcell',
    imagePublicID: 'stream_thumbnail_uzevah',
    titleFont: 'roboto',
    titleFontSize: '40',
    textColor: '222426',
    textAreaWidth: 645,
    textLeftOffset: 66,
    titleBottomOffset: 279,
    imageHeight: 468,
    imageWidth: 831
  })

  return (
    <div style={{
      width: '800px',
    }}
      className="mb-6">
      <a className="text-xl font-semibold" href={url}>
        <img src={socialImage} width="800" />
        {title}
      </a>
      <p className="text-lg">{description}</p>
    </div>

  )
}


const StreamCard = ({ title, url, description }) => {

  const socialImage = figureItOut({
    title: title,
    titleExtraConfig: '_bold',
    tagline: '',
    cloudName: 'maxcell',
    imagePublicID: 'stream_thumbnail_uzevah',
    titleFont: 'roboto',
    titleFontSize: '18',
    textColor: '222426',
    textAreaWidth: 215,
    textLeftOffset: 35,
    titleBottomOffset: 130,
    imageHeight: 225,
    imageWidth: 400
  })

  return (
    <div style={{
      width: '400px',
    }}>
      <a className="text-xl font-semibold" href={url}>
        <img src={socialImage} width="400" />
        {title}
      </a>
      <p className="text-lg">{description}</p>
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
    </div>
  )
}

// Come back and fill this out
const StreamSetup = () => {
  return (
    <Fragment>
      <h3>Stream Setup</h3>
      <p>Fill this shit out please</p>
    </Fragment>
  )
}

const Streaming = (props) => {
  return (
    <Fragment>
      <h3 className="mt-6 mb-4 text-3xl font-bold">Past recordings</h3>
      <HeroCard url={props.streams[0].slug} title={props.streams[0].title} description={props.streams[0].description || ''} />
      <StreamCards streams={props.streams.slice(1)} />
    </Fragment>
  )
}

export default Streaming