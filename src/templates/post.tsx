import React from "react";
import { graphql, PageProps } from "gatsby";
import { SanityPost } from "../types";

interface PostTemplateProps extends PageProps {
  data: {
    post: SanityPost;
  };
}

function PostTemplate({ data }: PostTemplateProps) {
  const { post } = data;
  return <h1>{post.title}</h1>;
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
