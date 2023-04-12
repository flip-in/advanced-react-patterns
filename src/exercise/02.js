// // Compound Components
// // http://localhost:3000/isolated/exercise/02.js

// import * as React from 'react'
// import {Switch} from '../switch'

// const ToggleContext = React.createContext()

// function Toggle({children}) {
//   const [on, setOn] = React.useState(false)
//   const toggle = () => setOn(!on)

//   return (
//     <ToggleContext.Provider value={{on, toggle}}>
//       {children}
//     </ToggleContext.Provider>
//   )
// }

// const useToggle = () => {
//   const context = React.useContext(ToggleContext)
//   if (!context) {
//     throw new Error('useToggle must be used within a <Toggle />')
//   }
//   return context
// }

// // Accepts `on` and `children` props and returns `children` if `on` is true
// const ToggleOn = ({children}) => {
//   const {on} = useToggle()
//   return on ? children : null
// }

// // Accepts `on` and `children` props and returns `children` if `on` is false
// const ToggleOff = ({children}) => {
//   const {on: toggleOn} = useToggle()
//   return toggleOn ? null : children
// }

// // Accepts `on` and `toggle` props and returns the <Switch /> with those props.
// const ToggleButton = () => {
//   const {on: toggleOn, toggle: toggleToggle} = useToggle()
//   return <Switch on={toggleOn} onClick={toggleToggle} />
// }

// function App() {
//   return (
//     <div>
//       <Toggle>
//         <ToggleOn>The button is on</ToggleOn>
//         <ToggleOff>The button is off</ToggleOff>
//         <span>Hello</span>
//         <ToggleButton />
//       </Toggle>
//     </div>
//   )
// }

// export default App

/*
eslint
  no-unused-vars: "off",
*/

// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    if (typeof child.type === 'string') {
      return child
    }
    return React.cloneElement(child, {on, toggle})
  })
}

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => {
  if (on) {
    return children
  }
  return null
}

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => {
  if (!on) {
    return children
  }
  return null
}

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle}) => {
  return <Switch on={on} onClick={toggle} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
