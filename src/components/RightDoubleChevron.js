import { h } from 'preact';

// HeroIcon
// https://heroicons.com/
function RightDoubleChevron(props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
  )
}

export default RightDoubleChevron;