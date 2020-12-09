import { h, Fragment } from 'preact';

function About(props) {
  return (
    <Fragment>
      <p className="text-lg pt-2">
        Howdy! I'm Prince Wilson, but you can call me Prince. I am a person who cares about making
        better communities one step at a time. Whether it is through giving talks at meetups/conferences,
        or building and securing technology to make people's lives better.
        </p>
      <p className="text-lg pt-2">
        I work as a software engineer at <a className="text-lg text-purple-700 underline" href="https://newsela.com">Newsela</a>. I previously worked as a software engineer over at <a target="_blank" rel="noopener noreferrer" href="https://flatironschool.com/">Flatiron School</a>, powered by <a className="text-lg text-purple-700 underline" href="https://wework.com/">WeWork</a>.
          I started off as an instructor there and helped over 400 folks transition into a career of technology!
          Some of my previous work includes working at Clarifai and State Farm Insurance.
        </p>
      <p className="text-lg pt-2">
        I graduated with a Bachelors degree in Computer Science with a focus in security over at the University of Central Florida. Back in school, I founded our tech club with a bunch of my friends,
          known as Tech Knights. We also created our first intercollegiate hackathon known as <a className="text-lg text-purple-700 underline" href="https://knighthacks.org/">Knight Hacks</a>.
        </p>
      <p className="text-lg pt-2">
        Now, I enjoy exploring New York City! I look for opportunities to give back to communities that helped me become who I am today, through mentorship and open source.
        But most of all, I really really love corgis.
        </p>
    </Fragment>
  )
}


export default About;