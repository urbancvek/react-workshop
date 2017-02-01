// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';

// Naredi komponento Form, ki bo od uporabnika zahtevala ime, email in starost
// Oseba naj bo starejša od 18 let preverite tudi naj ime ne bo krajše od 3 znakov
// Preverite tudi mail s pomočjo sledeče funkcije
// !!text.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
// Če je field pravilno vnešen naj se obarva zeleno drugače pa naj bo rdeč
// Ob pritisku na gumb submit naj izpiše vse podatke v konzolo

// Tips: uporabi onChange na input fieldu. Event ki ga dobiš je oblike
/*
{
  target: {
    value
  }
}
*/

@autobind
class Form extends Component {
  state: State;
  state: State = {
    firstName: '',
    email: '',
    age: '',
  };

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value.toUpperCase(),
    });
  }

  render() {
    const { firstName, email, age } = this.state;

    return (
      <div>
        <input
          value={firstName}
          name="firstName"
          onChange={this.handleChange}
          style={{
            backgroundColor: firstName.length > 3 ? 'green' : 'red',
          }}
        />
        <input
          value={email}
          name="email"
          onChange={this.handleChange}
          style={{
            backgroundColor: email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? 'green' : 'red',
          }}
        />
        <input
          value={age}
          name="age"
          onChange={this.handleChange}
          style={{
            backgroundColor: age > 18 ? 'green' : 'red',
          }}
        />
        <button onClick={() => console.info(this.state)}>
          Submit
        </button>
      </div>
    );
  }
}

type State = {
  firstName: string,
  email: string,
  age: string,
};


// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleForm = () => (
  <div>
    <Form />
  </div>
);

export default ExampleForm;
