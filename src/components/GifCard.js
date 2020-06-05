import React, { Component } from "react";
import axios from "axios";

class GifCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        title: [],
        GIFurl: [],
    };
  }

  componentDidMount() {

    const API_KEY = process.env.REACT_APP_GIPHY_KEY;
    const trendSearch = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
    axios
      .get(trendSearch)
      .then((response) => {

        const data = response.data.data;
        let titles = [];
        let GIFsUrl = [];
        for(let i=0; i<data.length; i++){
            titles.push(data[i].title);
            GIFsUrl.push(data[i].images.original.url);
        }
 
        console.log(titles.length);
        console.log(GIFsUrl.length);


        this.setState({ 
            title: titles,
            GIFurl: GIFsUrl,
         });
      })
      .catch((err) => console.log(err));
    }

  componentDidUpdate(preProps, preState){
    if(preProps.search_method !== this.props.search_method ||
      preProps.search_keyword !== this.props.search_keyword ||
      preProps.search_number !== this.props.search_number ||
      preProps.search_rank !== this.props.search_rank ||
      preProps.search_tag !== this.props.search_tag){


      if(this.props.search_method === 'Trending'){
          const API_KEY = process.env.REACT_APP_GIPHY_KEY;
  
          let trendSearch = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
          if(this.props.search_number !== ''){
            trendSearch = trendSearch.concat(`&limit=${this.props.search_number}`);
          }
          if(this.props.search_rank){
            trendSearch = trendSearch.concat(`&rating=${this.props.search_rank}`);
          }

          console.log(trendSearch);
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
              //console.log(GIFsUrl.length);


              this.setState({ 
                  title: titles,
                  GIFurl: GIFsUrl,
              });
            })
            .catch((err) => console.log(err));
      }
      else if(this.props.search_method === 'Random'){
        const API_KEY = process.env.REACT_APP_GIPHY_KEY;
  
        let trendSearch = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        if(this.props.search_tag !== ''){
          trendSearch = trendSearch.concat(`&tag=${this.props.search_tag}`);
        }
        if(this.props.search_rank){
          trendSearch = trendSearch.concat(`&rating=${this.props.search_rank}`);
        }

        console.log(trendSearch);
        axios
          .get(trendSearch)
          .then((response) => {

            const data = response.data.data;
            //console.log(data[0]);
            let titles = [], GIFsUrl = [];
            titles.push(data.title);
            GIFsUrl.push(data.images.original.url);
            // for(let i=0; i<data.length; i++){
            //     titles.push(data[i].title);
            //     GIFsUrl.push(data[i].images.original.url);
            // }
    
            console.log(titles);
            console.log(GIFsUrl);


            this.setState({ 
                title: titles,
                GIFurl: GIFsUrl,
            });
          })
          .catch((err) => console.log(err));
      }
      else if(this.props.search_method === "Regular"){
        const API_KEY = process.env.REACT_APP_GIPHY_KEY;
  
        let trendSearch = `http://api.giphy.com/v1/gifs/search?q=${this.props.search_keyword}&api_key=${API_KEY}`;
        if(this.props.search_number !== ''){
          trendSearch = trendSearch.concat(`&limit=${this.props.search_number}`);
        }
        if(this.props.search_rank){
          trendSearch = trendSearch.concat(`&rating=${this.props.search_rank}`);
        }

        console.log(trendSearch);
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
            //console.log(GIFsUrl.length);


            this.setState({ 
                title: titles,
                GIFurl: GIFsUrl,
            });
          })
          .catch((err) => console.log(err));
      }
        
    }
    
  }

  render() {
    let display;
    let sequence = [...Array(this.state.title.length).keys()];
    //console.log(sequence);

    if (this.state.title.length === 0) {
      display = <p>Loading...</p>;
    } 
    else {    
      const urlList = sequence.map((i) => {
          return (
              <li> 
                  <div>
                    <img src= {this.state.GIFurl[i]}/><br/>
                      <h3>{this.state.title[i]}</h3>
                  </div>                 
              </li>
          )
      });
      display = (
        <>
          <ul>
            {urlList}
          </ul>
        </>
      );
    }

    return (
      <div className="GIFS">   
        {display}
      </div>
    );
  }

}

export default GifCard;