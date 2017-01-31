// @flow
import React from 'react';

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


// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleForm = () => (
  <div>
    Tukaj vstavi ustvarjeno komponento
    {'<Form />'}
  </div>
);

export default ExampleForm;
