import React from "react";
import { graphql, PageProps } from "gatsby";
import { SanityPostConnection } from "../types";

interface IndexPageProps extends PageProps {
  data: {
    posts: SanityPostConnection;
  };
}

function IndexPage({ data }: IndexPageProps) {
  const { posts } = data;
  return (
    <>
      <h1>Daniel Noyola Blog re-design</h1>
      {posts.nodes.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </>
  );
}

export const query = graphql`
  query indexPageQuery {
    posts: allSanityPost {
      nodes {
        id
        title
      }
    }
  }
`;

export default IndexPage;
