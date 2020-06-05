import React, { Component } from "react";
import axios from "axios";
//import GifCard from "./components/GifCard";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      result: {},
      filterBy: "", //regular, trending, random
      //gifs: []
    };
  }

  // componentDidMount() {
  //   //const search = this.props.search;
  //   const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  //   //const regSearch = 'http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}';
  //   const regSearch =
  //     "http://api.giphy.com/v1/gifs/search?q=" +
  //     this.props.search +
  //     "&api_key=" +
  //     API_KEY;
  //   //const trendSearch = 'http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}';
  //   //const randSearch = 'http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}';

  //   axios
  //     .get(regSearch)
  //     .then((response) => {
  //       const data = response.data;

  //       console.log(data);

  //       const newGif = {
  //         title: data.data[0].title,
  //         imageUrl: data.data[0].images.original.url,
  //       };

  //       this.setState({ search: newGif });
  //     })
  //     .catch((err) => console.log(err));
  // }

  getGiphy = () => {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    //const regSearch = 'http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}';
    const regSearch =
      "http://api.giphy.com/v1/gifs/search?q=" +
      this.props.search +
      "&api_key=" +
      API_KEY;
    //const trendSearch = 'http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}';
    //const randSearch = 'http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}';
    console.log(regSearch);
    axios
      .get(regSearch)
      .then((response) => {
        const data = response.data;

        console.log(data);
        const newGif = data.map((d) => {
          return {
            title: d.title,
            imageUrl: d.images.original.url,
          };
        });

        this.setState({ result: newGif });
        console.log(this.state.result);

        /** title: d.title,
            imageUrl: d.images.original.url, */
      })
      .catch((err) => console.log(err));
  };

  inputSearch = (event) => {
    this.setState({
      search: event.target.value,
      filterBy: "regular",
    });
  };

  setSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    let display;
    let options = (
      <>
        <button>Trending Search</button>
        <button>Random Search</button>
      </>
    );

    if (this.state.search) {
      display = (
        <>
          <img src={this.state.search.imageUrl} alt={this.state.search.title} />
          <ul>
            <li>{this.state.search.title} </li>
          </ul>
        </>
      );
    } else {
      display = <p>Loading...</p>;
    }

    return (
      <>
        <div>
          <form>
            <input type="text" onChange={this.setSearch} />
            <button onClick={this.getGiphy}>Regular Search</button>
          </form>
        </div>
        <div className="SearchField">{display}</div>
      </>
    );
  }
}

export default SearchField;
