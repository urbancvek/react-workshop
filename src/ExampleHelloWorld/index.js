// @flow
import React from 'react';

// Kreiraj komponento, ki se imenuje HelloProps
// Podaj ji firstName in lastName
// Izpiše pa naj naprimer "Hello, Urban Cvek!"
const HelloProps = ({ firstName, lastName }: HelloPropsProps) => (
  <div>
    Hello, {firstName} {lastName}!
  </div>
);

type HelloPropsProps = {
  firstName: string,
  lastName: string,
};

// Kreiraj komponento, ki se imenuje HelloChildren
// Naj naredi isto kot zgornja komponenta vendar naj tokrat uporabi React.Children
const HelloChildren = ({ children }: HelloChildrenProps) => (
  <div>
    Hello, {children}!
  </div>
);

type HelloChildrenProps = {
  children?: any,
};

// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleHelloWorld = () => (
  <div>
    <HelloProps firstName="Urban" lastName="Cvek" />
    <HelloChildren>
      Urban Cvek
    </HelloChildren>
  </div>
);

export default ExampleHelloWorld;
