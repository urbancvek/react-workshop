// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/blog/first-post">First post</Link>
  </div>
);

export default HomePage;
