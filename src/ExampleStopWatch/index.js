// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';

// Kreiraj komponento Stopwatch, ki bo merila čas v desetinkah sekunde
// Naj ima gumb start, ki se spremeni v pause in pa gumb reset, ki jo resetira
@autobind
class Stopwatch extends Component {
  state: State;

  state: State = { time: 0, timing: false };

  componentDidMount() {
    setInterval(this.updateTime, 100);
  }

  updateTime() {
    const { timing, time } = this.state;
    if (timing) this.setState({ time: time + 0.1 });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.time.toFixed(1)}
        </div>
        <button onClick={() => this.setState({ timing: !this.state.timing })}>
          {this.state.timing ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => this.setState({ time: 0, timing: false })}>
          Reset
        </button>
      </div>
    );
  }
}

type State = {
  time: number,
  timing: boolean,
};

// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleStopwatch = () => (
  <div>
    <Stopwatch />
  </div>
);

export default ExampleStopwatch;
