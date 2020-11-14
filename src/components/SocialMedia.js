import { h } from 'preact';
import {
  GitHub,
  LinkedIn,
  Twitch,
  Twitter
} from './SocialIcon.js';


export default function SocialMedia() {
  return (
    <ul className="flex flex-col">
      <li>
        <a href="https://github.com/maxcell">
          See my code on GitHub{" "}<GitHub />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/maxcell">
          Connect with me on Linkedin{" "}<LinkedIn />
        </a>
      </li>
      <li>
        <a href="https://twitch.tv/maxcellw">
          Join me on Twitch every Tuesday{" "}<Twitch />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/maxcell">
          Follow me on Twitter{" "}<Twitter />
        </a>
      </li>
    </ul>
  )
}