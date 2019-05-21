import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import { Auth } from "aws-amplify";

class App extends React.Component {
  // initial state
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: ""
  };

  // event handler
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number }
      });
    } catch (err) {
      console.log("error signing up user...", err);
    }
  };

  signOut = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log("error signing out user...", err);
    }
  }

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <input
              name="username"
              placeholder="username"
              onChange={this.onChange}
            />
                        <input
              name="password"
              type="password"
              placeholder="password"
              onChange={this.onChange}
            />
                        <input
              name="email"
              placeholder="email"
              onChange={this.onChange}
            />
                        <input
              name="phone_number"
              placeholder="phone_number"
              onChange={this.onChange}
            />
          </div>
          <button onClick={this.signUp}>Sign Up</button>
          <button onClick={this.signOut}>Sign Out</button>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
