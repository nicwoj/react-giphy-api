import React, { Component } from "react";
import axios from "axios";
//import GifCard from "./components/GifCard";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: "",
      filterBy: "", //regular, trending, random
      //gifs: []
    };
  }

  componentDidMount() {
    //const search = this.props.search;
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    //const regSearch = 'http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}';
    const regSearch = 'http://api.giphy.com/v1/gifs/search?q=' + this.props.search + '&api_key=' + API_KEY
    //const trendSearch = 'http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}';
    //const randSearch = 'http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}';

    axios
      .get(regSearch)
      .then((response) => {
        const data = response.data;
 
        console.log(data);

        const newGif = {
          title: data.data[0].title,
          imageUrl: data.data[0].images.original.url,
        };

        this.setState({ search: newGif });
      })
      .catch((err) => console.log(err));
    }

    inputSearch = (event) => {
      this.setState({ 
        search: event.target.value,
        filterBy: "regular"
      });
    }

    render() {
      let display;
      let options = (
        <>
        <form>
          <input type="text" searchTerm="search"/>
          <button onClick={this.inputSearch}>Regular Search</button>
        </form>
        
        <button>Trending Search</button>
        <button>Random Search</button>
        </>
      );

      if (!this.state.search) {
        display = <p>Loading...</p>;
      } 
      else {
        display = (
          <>
            <img
              src={this.state.search.imageUrl}
              alt={this.state.search.title}
            />
            <ul>
              <li>{this.state.search.title} </li>
            </ul>
          </>
        );
      }
  
      return (
        <>
        <div>{options}</div>
        <div className="SearchField">{display}</div>
        </>
      );
    }
}

export default SearchField;
