// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/blog/first-post">First post</Link>
  </div>
);

const AboutPage = () => (
  <div>
    <h1>About Page</h1>
    <Link to="/blog/some-awesome-blog-post">Some Awesome blog post</Link>
  </div>
);

const BlogPage = (props: BlogPageProps) => (
  <div>
    <h1>Blog Page</h1>
    <h2>{props.match.params.blogTitle}</h2>
  </div>
);

type BlogPageProps = {
  match: {
    params: {
      blogTitle: string,
    },
  },
};

export { HomePage, AboutPage, BlogPage };
