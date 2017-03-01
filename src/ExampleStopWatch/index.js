// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';

// Kreiraj komponento Stopwatch, ki bo merila čas v desetinkah sekunde
// Naj ima gumb start, ki se spremeni v pause in pa gumb reset, ki jo resetira
@autobind
class Stopwatch extends Component {
  state: State;

  state: State = {
    time: 0,
    timer: null,
    isRunning: false,
  };

  updateTime() {
    this.setState({ time: this.state.time + 0.1 });
  }

  startButtonClicked() {
    if (!this.state.isRunning) {
      const timer = setInterval(this.updateTime, 100);

      this.setState({
        isRunning: true,
        timer,
      });
    } else {
      if (this.state.timer) clearInterval(this.state.timer);

      this.setState({
        isRunning: false,
        timer: null,
      });
    }
  }

  resetButtonClicked() {
    if (this.state.timer) clearInterval(this.state.timer);
    this.setState({
      timer: null,
      isRunning: false,
      time: 0,
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.time.toFixed(1)}
        </div>
        <button onClick={this.startButtonClicked}>
          {this.state.timing ? 'Pause' : 'Start'}
        </button>
        <button onClick={this.resetButtonClicked}>
          Reset
        </button>
      </div>
    );
  }
}

type State = {
  time: number,
  timer: ?any,
  isRunning: boolean,
};

// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleStopwatch = () => (
  <div>
    <Stopwatch />
  </div>
);

export default ExampleStopwatch;
