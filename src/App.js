// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';

import ExampleHelloWorld from 'ExampleHelloWorld';
import ExampleClickCounter from 'ExampleClickCounter';
import ExampleStopwatch from 'ExampleStopwatch';
import ExampleForm from 'ExampleForm';
import ExampleAPICall from 'ExampleAPICall';
import ExampleReactRouter from 'ExampleReactRouter';

@autobind
class App extends Component {
  render() {
    return (
      <div>
        <ExampleReactRouter />
      </div>
    );
  }
}

export default App;
