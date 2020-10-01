import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    // console.log("this is props", this.props);

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            //Just have to pass this as somethign separate
            key={counter.id}
            //Here we are doing two things. We are referenicning the handleDelete function found within this Component/class. Also, we are passing the onDelete name of this function to the Counter component that has been imported here. We are also passing it value. If we change on "onDelete" to anything else, the way to reference it in the child component is this.props.whatever-else-was-the-name
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            //This allows us to pass the whole object/state of counter to the child component. Now the child component can pick and choose what keys from counter they want to use through this.props.counter
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
