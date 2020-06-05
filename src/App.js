import React, { Component } from "react";
import "./App.css";
import SearchField from "./components/SearchField";
import GifCard from "./components/GifCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GIPHY Search</h1>
        <SearchField />

      </div>
    );
  }
}

export default App;
