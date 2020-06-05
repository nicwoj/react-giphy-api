import React, { Component } from "react";
import axios from "axios";
import GifCard from "./GifCard";

class SearchField extends Component {
  constructor(props) {
    super(props);
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