// src/App.js
import React, { Component } from "react";
import { S3Album } from 'aws-amplify-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <S3Album path={''} picker />
      </div>
    );
  }
}

export default App;
