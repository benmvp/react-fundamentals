// Dynamic Forms
// http://localhost:3000/isolated/exercise/07.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add some state (with React.useState) for the error.
  // 💰 const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  // 🐨 create a `handleChange` function that accepts the change `event` and
  // uses `event.target.value` to get the value of the input
  // 💰 remember this event will be triggered on the input, not the form

  // 🐨 use the value of the input to determine whether there's an error
  // 💰 There's an error if the user typed any upper-case characters
  // 💰 You can check this really easily via `const isValid = value === value.toLowerCase()`

  // 🐨 if there's an error, set the error state to 'Username must be lower case'
  // 💰 setError(isValid ? null : 'Username must be lower case')

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          // 🐨 add your onChange handler here
        />
      </div>
      {/* 🐨 if there's an error, then render it in a div here */}
      {/* 🐨 add a disabled prop to this button that's set to true if there's an error */}
      <button type="submit">Submit</button>
    </form>
  )
}

function Usage() {
  const onSubmitUsername = username => console.info('username', username)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default Usage
