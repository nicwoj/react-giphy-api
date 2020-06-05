import React, { Component } from "react";
import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
//import GifCard from "./components/GifCard";
=======
import GifCard from "./GifCard";
>>>>>>> c850cabcfa13fc718f06ee05b768d3603f106bfa
=======
import GifCard from "./GifCard";
>>>>>>> fixedSearchFunc

class SearchField extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      search: "",
      result: [],
      filterBy: "", //regular, trending, random
    };
  }

  getGiphy = () => {
    /* Calls the giphy API and sends the correct URL 
    based on which button the user interacts with*/
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; // API key
    let regSearch; // URL to send to API

    // Filtering through state.filterBy to send correct URL
    if (this.state.filterBy === "search") {
      regSearch = `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=${API_KEY}`;
    } else if (this.state.filterBy === "trending") {
      regSearch = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
    } else {
      regSearch = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    }

    axios // Sending request to the API
      .get(regSearch)
      .then((response) => {
        let data = response.data;
        let newGif, currentGif;
        currentGif = []; // Array to hold the response from API
        if (this.state.filterBy === "random") {
          /* The random URL returns one object while the search and 
          trending return an array of objects, so we push that one object 
          into an array to keep the response as an array through 
          the whole program*/
          currentGif.push(data.data);
          console.log("ok....", data);
        } else {
          // Pushing each object to currentGif array
          data.data.map((e) => {
            return currentGif.push(e);
          });
        }

        /* Retreiving title and imageURL from each object 
        and pushing into a newGif array */
        newGif = currentGif.map((e) => {
          return {
            title: e.title,
            imageUrl: e.images.original.url,
          };
        });

        this.setState({ result: newGif });
      })
      .catch((err) => console.log(err));
  };

  // Sets the search state to text value
  setSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  // Sets the filterBy state to target value based on which button is clicked
  setFilterBy = (e) => {
    this.setState({ filterBy: e.target.value }, this.getGiphy);
  };

  render() {
    return (
      <>
        <div>
          <input
            type="textarea"
            onChange={this.setSearch}
            value={this.state.search}
          />
          <button onClick={this.setFilterBy} value="search">
            Regular Search
          </button>
          <button onClick={this.setFilterBy} value="trending">
            Trending Search
          </button>
          <button onClick={this.setFilterBy} value="random">
            Random Search
          </button>
        </div>
        <GifCard
          search={this.state.search}
          result={this.state.result}
          filterBy={this.state.filterBy}
        />
      </>
    );
  }
}

export default SearchField;
=======
    this.state = { 
        title: [],
        GIFurl: [],
    };
  }

  componentDidMount() {
    //const search = this.props.search;
    const API_KEY = "VDw7hEA1dQuT1rV7K1Nr6l6z8EmwGdCD";
    //const regSearch = 'http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}';
    //const Search = 'http://api.giphy.com/v1/gifs/search?q=' + this.props.search + '&api_key=' + API_KEY
    const trendSearch = 'http://api.giphy.com/v1/gifs/trending?api_key=' + API_KEY;
    //const randSearch = 'http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}';



    axios
      .get(trendSearch)
      .then((response) => {

        const data = response.data.data;
        //console.log(data[0]);
        let titles = [];
        let GIFsUrl = [];
        for(let i=0; i<data.length; i++){
            titles.push(data[i].title);
            GIFsUrl.push(data[i].images.original.url);
        }
 
        //console.log(titles.length);
       // console.log(GIFsUrl.length);


        this.setState({ 
            title: titles,
            GIFurl: GIFsUrl,
         });
      })
      .catch((err) => console.log(err));
    }

    // inputSearch = (event) => {
    //   this.setState({ 
    //     search: event.target.value,
    //     filterBy: "regular"
    //   });
    // }

    render() {
      
  
      return (
        <>
        <div className="SearchField">

        <GifCard titles={this.state.title} urls={this.state.GIFurl} />
        </div>
        </>
      );
    }
}

export default SearchField;
>>>>>>> c850cabcfa13fc718f06ee05b768d3603f106bfa
