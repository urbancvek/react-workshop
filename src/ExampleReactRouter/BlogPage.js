// @flow
import React from 'react';

const BlogPage = (props: Props) => (
  <div>
    <h1>Blog Page</h1>
    <h2>{props.match.params.blogTitle}</h2>
  </div>
);

type Props = {
  match: {
    params: {
      blogTitle: string,
    },
  },
};

export default BlogPage;
