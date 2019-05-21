// src/App.js
import React from "react";
import { Storage } from "aws-amplify";

class App extends React.Component {
  onChange(e) {
      const file = e.target.files[0];
      Storage.put('example.png', file, {
          contentType: 'image/png'
      })
      .then (result => console.log(result))
      .catch(err => console.log(err));
  }

  render() {
      return (
          <input
              type="file" accept='image'
              onChange={(e) => this.onChange(e)}
          />
      )
  }
}

export default App;
