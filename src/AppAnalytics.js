// src/App.js
import React, { useState, useEffect } from "react";
import { Analytics, Auth } from 'aws-amplify'
import { withAuthenticator } from "aws-amplify-react/dist/Auth";

const App = () => {
  const [ username, setUsername ] = useState('');
  function recordEvent() {
    Analytics.record({
      name: 'My test event',
      attribute: { username }
    })
  }
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUsername(user.username))
      .catch(err => console.log({ err }))
  }, [])
  return (
    <div>
      <button onClick={recordEvent}>Record Event</button>
    </div>
  )
}

export default withAuthenticator(App, { includeGreetings: true });
