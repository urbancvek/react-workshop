// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
  <div>
    <h1>About Page</h1>
    <Link to="/blog/some-awesome-blog-post">Some Awesome blog post</Link>
  </div>
);

export default AboutPage;
