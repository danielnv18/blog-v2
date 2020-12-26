import React from "react";
import { graphql, PageProps } from "gatsby";
import { withLayout } from "../components/Layout";
import { SanityPostConnection } from "../types";
import PostTeaser from "../components/PostTeaser";

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
        <PostTeaser key={post.id} post={post} />
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
        publishedAt
        body {
          children {
            _type
            text
          }
        }
        slug {
          current
        }
        author {
          name
          slug {
            current
          }
        }
        categories {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

export default withLayout(IndexPage);
