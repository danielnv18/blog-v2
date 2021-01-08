import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { SanityPostConnection } from "../types";
import PostTeaser from "../components/PostTeaser";

interface IndexPageProps extends PageProps {
  data: {
    posts: SanityPostConnection;
  };
}

function IndexPage(props: IndexPageProps) {
  const { data, location } = props;
  const { posts } = data;
  return (
    <Layout location={location} header={{ title: "Daniel Noyola" }}>
      booo
    </Layout>
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

export default IndexPage;
