import React from "react";
import { graphql } from "gatsby";

function PostTemplate() {
  return <h1>Post template</h1>;
}

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      title
      slug {
        current
      }
      _rawBody
    }
  }
`;

export default PostTemplate;
