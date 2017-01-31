// @flow
import React from 'react';

// Kreiraj komponento, ki se imenuje HelloProps
// Podaj ji firstName in lastName
// Izpiše pa naj naprimer "Hello, Urban Cvek!"


// Kreiraj komponento, ki se imenuje HelloChildren
// Naj naredi isto kot zgornja komponenta vendar naj tokrat uporabi React.Children


// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleHelloWorld = () => (
  <div>
    Tukaj vstavi ustvarjene komponente
    {'<HelloProps />'}
    {'<HelloChildren />'}
  </div>
);

export default ExampleHelloWorld;
