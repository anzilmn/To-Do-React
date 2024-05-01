import React, { Component } from 'react';
import App from "./App.css";

// Sample profile images

class BirthdayListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdays: [
        { name: 'Griffin Wooldridge', age: 20, img: griffinImg },
        { name: 'Hester Hogan', age: 23, img: hesterImg },
        { name: 'Danny Winget', age: 25, img: dannyImg },
        { name: 'Joshua Vergara', age: 23, img: joshuaImg },
        { name: 'Jon Rettinger', age: 20, img: jonImg }
      ]
    };
  }

  handleClearAll = () => {
    this.setState({ birthdays: [] });
  };

  render() {
    const { birthdays } = this.state;

    return (
      <div className="container">
        <h2 className="title">{birthdays.length} birthdays today</h2>
        {birthdays.map((person, index) => (
          <div className="person" key={index}>
            <img src={person.img} alt={person.name} />
            <p>{person.name}</p>
            <p>{person.age} years</p>
          </div>
        ))}
        <button className="button" onClick={this.handleClearAll}>Clear All</button>
      </div>
    );
  }
}

export default BirthdayListing;
