// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';

// Kreiraj komponento, ki bo shranjevala trenutno število klikov.
// Komponenta naj ima gumb, ki to število povečuje
// Komponenta naj tudi prikazuje kolikokrat je bil gumb pritisnjen
@autobind
class ClickCounter extends Component {
  state: State;

  state: State = {
    timesClicked: 0,
  };

  handleClick() {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  }

  render() {
    const { timesClicked } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>
          {
            timesClicked === 0
              ? 'Klikni me!'
              : `Kliknil si me že ${timesClicked}x!`
          }
        </button>
      </div>
    );
  }
}

type State = {
  timesClicked: number,
};

// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleClickCounter = () => (
  <div>
    <ClickCounter />
  </div>
);

export default ExampleClickCounter;
