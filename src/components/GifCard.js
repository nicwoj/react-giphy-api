import React, { Component } from 'react';

class GifCard extends Component {
  render() {
    let display;
    if (this.props.result) {
      display = this.props.result.map((e) => {
        return (
          <>
            {' '}
            <h3>{e.title}</h3>
            <img src={e.imageUrl} alt={e.title} />
          </>
        );
      });
    } else {
      display = <p>Loading...</p>;
    }
    return (
      <>
        <h1>{this.props.filterBy.toString().toUpperCase()}</h1>
        <div>{display}</div>
      </>
    );
  }
}

export default GifCard;
