import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 7 },
      { id: 5, value: 4 },
    ],
  };

  handleIncrement = (counter) => {
    //shows in console
    // console.log("Increment Clicked");
    // console.log(counter);
    //creating a new array from the old one that you can modify.
    const counters = [...this.state.counters];
    const indexOfCounter = counters.indexOf(counter);
    // console.log("Index of Counter", indexOfCounter);
    //This destructures the ccounter array into the specifc one you are looking for
    counters[indexOfCounter] = { ...counter };
    console.log("what is this?", counters[indexOfCounter]);
    counters[indexOfCounter].value++;
    //changes state the official way so React is aware.
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const indexOfCounter = counters.indexOf(counter);
    counters[indexOfCounter] = { ...counter };
    counters[indexOfCounter].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // console.log("Event handler Called", counterId);
    const laughs = this.state.counters.filter((c) => c.id !== counterId);
    // console.log("this is just for laughs", laughs);
    this.setState({ counters: laughs });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          //Cool way of figuring out the total counters
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            //The left side is the name of the function we are passing down to this child component (Counters), the right side refers to the function found within this class.
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            //This is how you pass counters from the state down to the child component
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
