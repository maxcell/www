import { h } from 'preact';
import {
  GitHub,
  LinkedIn,
  Twitch,
  Twitter
} from './SocialIcon.js';

function Footer() {
  return (
    <footer className="">
      <ul>
        <li><a className="text-lg" href="https://github.com/maxcell"><GitHub /> GitHub</a></li>
        <li><a className="text-lg" href="https://twitter.com/maxcell"><Twitter /> Twitter</a></li>
        <li><a className="text-lg" href="https://twitch.com/maxcellw"><Twitch /> Twitch</a></li>
        <li><a className="text-lg" href="https://linkedin.com/in/maxcell"><LinkedIn /> LinkedIn</a></li>
      </ul>
    </footer>
  );
}

export default Footer;