import React, { Component } from "react";

class GifCard extends Component {
<<<<<<< HEAD
<<<<<<< HEAD
  constructor(props) {
    super(props);
  }

=======
>>>>>>> fixedSearchFunc
  render() {
    let display;
    if (this.props.result) {
      display = this.props.result.map((e) => {
        return (
          <>
            {" "}
            <h3>{e.title}</h3>
            <img src={e.imageUrl} alt={e.title} />
          </>
        );
      });
    } else {
      display = <p>Loading...</p>;
    }
    return (
<<<<<<< HEAD
      <div>
        
=======


  render() {
    let display;
    let sequence = [...Array(this.props.titles.length).keys()];
    //console.log(sequence);

    if (this.props.titles.length === 0) {
      display = <p>Loading...</p>;
    } 
    else {    
      const urlList = sequence.map((i) => {
          return (
              <li> 
                  <div>
                    <img src= {this.props.urls[i]}/><br/>
                      <h3>{this.props.titles[i]}</h3>
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
      <div>   
        {display}
>>>>>>> c850cabcfa13fc718f06ee05b768d3603f106bfa
      </div>
=======
      <>
        <h1>{this.props.filterBy.toString().toUpperCase()}</h1>
        <div>{display}</div>
      </>
>>>>>>> fixedSearchFunc
    );
  }
}

<<<<<<< HEAD
export default GifCard;
=======
export default GifCard;
>>>>>>> c850cabcfa13fc718f06ee05b768d3603f106bfa
