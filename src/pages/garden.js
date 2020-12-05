import { h, Fragment } from 'preact';
import { useReducer, useState } from 'preact/hooks';
import { matchSorter } from 'match-sorter';

const ToggleButton = (props) => {
  return <button
    className={`shadow-sm font-medium py-1 px-2
    border-b-4 bg-gray-100 hover:bg-gray-200 hover:border-gray-300 
    active:bg-gray-400 active:border-gray-400
    rounded ${props.pressedStyles}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
}

const TAGS = [
  'Rust',
  'React',
  'Learning',
  'MDX'
]

const ButtonTagsList = (props) => {
  const buttonTags = props.tags.map(tag => {
    const isActive = props.tagsState[tag] === 'on'
    const activeStyles = isActive ?
      'transition ease-in-out duration-150 bg-purple-500 border-purple-500 hover:bg-purple-400 hover:border-purple-400 text-gray-100' : '';

    return <li className='mr-2 text-sm' key={tag}>
      <ToggleButton
        pressedStyles={activeStyles}
        onClick={() => props.toggleDispatch({ type: isActive ? 'off' : 'on', tag })}>
        {tag}
      </ToggleButton>
    </li>
  })

  return <ul className="flex mb-4">{buttonTags}</ul>
}

const SearchBox = (props) => {
  return (
    <Fragment>
      <label htmlFor="search-box">Search for post: </label>
      <input id="search-box" placeholder="React" value={props.searchTerm} onChange={(e) => props.setSearchTerm(e.target.value)} className="rounded w-full max-w-sm border-2 border-gray-200 p-2" type="text" name="search" />
    </Fragment>
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'on':
      return { ...state, [action.tag]: 'on' }
    case 'off':
      return { ...state, [action.tag]: 'off' }
    default:
      throw new Error("You don fucked up.")
  }
}

const Garden = (props) => {

  const [state, dispatch] = useReducer(reducer, {})
  const [searchTerm, setSearchTerm] = useState('')
  // Version 1
  const activeFilters = []
  for (let tag in state) {
    if (state[tag] === 'on') { activeFilters.push(tag) }
  }

  // Version 2
  // const activeFitlers = Object.keys(state).filter(tag => state[tag] === 'on')
  // Given the state
  // Check keys whose value is on
  // Find posts that match on those keys
  let filteredPosts = activeFilters.length > 0 ? matchSorter(props.posts, activeFilters.join(' '), { keys: ['tags'] }) : props.posts
  filteredPosts = searchTerm !== '' ? matchSorter(filteredPosts, searchTerm, { keys: ['title'] }) : filteredPosts

  return (
    <Fragment>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>
        Select any tags to filter by:
        <ButtonTagsList tagsState={state} toggleDispatch={dispatch} tags={TAGS} />
      </div>
      <ol className="mt-8 list-none list-inside">
        {filteredPosts.map((post) => (
          <li className="mt-5 mb-5 first:mt-0 last:mb-0">
            <a className="underline text-lg font-bold text-gray-900" href={post.slug}>
              {post.title}
            </a>
          </li>
        ))}
      </ol>
    </Fragment>
  )
}

export default Garden