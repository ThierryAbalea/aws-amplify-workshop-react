// src/App.js
import React, { useEffect, useReducer } from "react";
import { API } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";

// create initial state
const initialState = {
  loading: true,
  coins: []
};

// update reducer
function reducer(state, action) {
  switch (action.type) {
    case "SETCOINS":
      return { ...state, coins: action.coins, loading: false };
    case "ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getData() {
    try {
      const data = await API.get("cryptoapi", "/coins?limit=5&start=100");
      console.log("data from Lambda REST API: ", data);
      dispatch({ type: "SETCOINS", coins: data.coins });
    } catch (err) {
      console.log("error fetching data..", err);
      dispatch({ type: "ERROR", error: err.toString() });
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error {state.error}</div>;
  }

  return (
    <div>
      {state.coins.map((c, i) => (
        <div key={i}>
          <h2>{c.name}</h2>
          <p>{c.price_usd}</p>
        </div>
      ))}
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
