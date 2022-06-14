// Prop Collections and Getters
// http://localhost:3000/isolated/final/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle(title) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return {
    on,
    toggle,
    togglerProps: {
      'aria-pressed': on,
      onClick: toggle,
      title,
      data: 'thingy',
    },
  }
}

function App() {
  const {on, togglerProps} = useToggle()
  return (
    <div>
      <Switch on={on} {...togglerProps} />
      <hr />
      <button aria-label="custom-button" {...togglerProps}>
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App
