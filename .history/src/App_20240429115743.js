import React, { Component } from 'react';
import App from "./App.css";

class BirthdayListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdays: [
        { name: 'Griffin Wooldridge', age: 20 },
        { name: 'Hester Hogan', age: 23 },
        { name: 'Danny Winget', age: 25 },
        { name: 'Joshua Vergara', age: 23 },
        { name: 'Jon Rettinger', age: 20 }
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
