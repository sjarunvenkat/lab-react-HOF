import React from "react";

class HigherOrderFunctions extends React.Component {
  // progression 1
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  // progression 2
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span> Id: {item.id} </span>
          <span> Name : {item.name} </span>
          <span> User Type: {item.user_type} </span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // progression 3
  filterUserType = (userType) => {
    const data = this.state.userData;
    const userData = data.filter((item) => item.user_type === userType);
    const filteredMapRows = userData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span> Id: {item.id} </span>
          <span> Name : {item.name} </span>
          <span> User Type: {item.user_type} </span>
        </li>
      </React.Fragment>
    ));
    return filteredMapRows;
  };

  // progression 4
  filterByLetter = (letter) => {
    const data = this.state.userData;
    const userWithLetter = data.filter((item) => item.name.startsWith(letter));
    const filteredByLetter = userWithLetter.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-element">
          <span> Id: {item.id} </span>
          <span> Name : {item.name} </span>
          <span> User Type: {item.user_type} </span>
        </li>
      </React.Fragment>
    ));
    return filteredByLetter;
  };

  // progression 5
  filterByAge = (upper, lower) => {
    const data = this.state.userData;
    const usersOfAge = data.filter(
      (item) => item.age > upper && item.age <= lower,
    );
    const filteredByAge = usersOfAge.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-element">
          <span> Id: {item.id} </span>
          <span> Name : {item.name} </span>
          <span> User Type: {item.user_type} </span>
        </li>
      </React.Fragment>
    ));
    return filteredByAge;
  };

  // progression 6
  findTotalExperience = () => {
    const data = this.state.userData;
    const type = data.filter((item) => item.user_type === "Designer");
    const totalExperience = type.reduce(
      (total, current) => total + current.years,
      0,
    );

    return totalExperience;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()} </ul>
        </div>

        <h1>Display based in User Type</h1>
        <div className="display-box">
          <ul>{this.filterUserType("Designer")}</ul>
        </div>

        <h1>Display names starting with letter "J"</h1>
        <div className="display-box">
          <ul>{this.filterByLetter("J")}</ul>
        </div>

        <h1>
          Display data based on age greater than 28 and less than or equal to 50
        </h1>
        <div className="display-box">
          <ul>{this.filterByAge(28, 50)}</ul>
        </div>

        <h1>Total years of Experience of the designers</h1>
        <div className="display-box">
          <p>{this.findTotalExperience()}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderFunctions;
