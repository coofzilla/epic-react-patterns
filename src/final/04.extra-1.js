// Prop Collections and Getters
// 💯 prop getters
// http://localhost:3000/isolated/final/04.extra-1.js

import * as React from 'react'
import {Switch} from '../switch'

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach(fn => fn?.(...args))

function useToggle() {
  const [on, setOn] = React.useState(false)
  const [another, setAnother] = React.useState('blah')
  const toggle = () => setOn(!on)
  //invoking and spreading the return value
  function getTogglerProps({onClick, ...props} = {}) {
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, toggle),
      title: 'title',
      ...props,
    }
  }

  return {
    another,
    on,
    toggle,
    getTogglerProps,
  }
}

function App() {
  const {on, getTogglerProps, another} = useToggle()
  return (
    <div>
      <Switch {...getTogglerProps({on, another})} />
      <hr />
      <button
        {...getTogglerProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('onButtonClick'),
          id: 'custom-button-id',
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App
