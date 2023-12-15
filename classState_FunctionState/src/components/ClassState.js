import React, { Component } from 'react';

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.handleIncrementCounter = this.handleIncrementCounter.bind(this);
  }

  handleIncrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Le State ou l'état dans react.js</h2>
        <p>{this.state.counter}</p>
        <button className="btn btn-info" onClick={this.handleIncrementCounter}>
          Incrementer le State
        </button>
      </div>
    );
  }
}

export default ClassState;
