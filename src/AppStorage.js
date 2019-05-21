// src/App.js
import React, { useEffect } from "react";
import { withAuthenticator } from "aws-amplify-react";
import { Storage } from "aws-amplify";

function App() {
  // create function to work with Storage
  const addToStorage = () => {
    Storage.put(
      "javascript/MyReactComponent.js",
      `
    import React from 'react'
    const App = () => (
      <p>Hello World</p>
    )
    export default App
  `
    )
      .then(result => {
        console.log("result: ", result);
      })
      .catch(err => console.log("error: ", err));
  };

  const readFromStorage = () => {
    Storage.list('')
      .then(data => console.log('data from S3: ', data))
      .catch(err => console.log('error'))
  }

  useEffect(() => {
    addToStorage();
    readFromStorage();
  }, []);

  return (
    <div>
      <button onClick={addToStorage}>Upload file</button>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
