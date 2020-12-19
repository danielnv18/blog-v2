import React from "react";
import { graphql, PageProps } from "gatsby";
import { SanityPost, SanityPostConnection, SanityPostEdge } from "../types";

interface IndexPageProps extends PageProps {
  data: {
    posts: SanityPostConnection;
  };
}

function IndexPage({ data }: IndexPageProps) {
  return (
    <>
      <h1>Daniel Noyola Blog re-design</h1>
      {data.posts.nodes.map((post) => (
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
