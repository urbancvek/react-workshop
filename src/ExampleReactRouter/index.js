// @flow
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { HomePage, AboutPage, BlogPage } from 'ExampleReactRouter/Pages';

// Ustvari komponento MyRouter, ki bo navigirala med HomePage, AboutPage, BlogPage
const Navbar = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
);

const MyRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar />

      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blog/:blogTitle" component={BlogPage} />
    </div>
  </BrowserRouter>
);

// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleReactRouter = () => (
  <div>
    <MyRouter />
  </div>
);

export default ExampleReactRouter;
