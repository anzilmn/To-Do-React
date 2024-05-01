import React, { Component } from 'react';
import App from "./App.css";


class BirthdayListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdays: [
        { name: 'Griffin Wooldridge', age: 20, img: require('./Ellipse -1.png') },
        { name: 'Hester Hogan', age: 23, img: require('./Ellipse -2.png') },
        { name: 'Danny Winget', age: 25, img: require('./Ellipse -3.png') },
        { name: 'Joshua Vergara', age: 23, img: require('./Ellipse -4.png') },
        { name: 'Jon Rettinger', age: 20, img: require('./Ellipse 1.png') }
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
