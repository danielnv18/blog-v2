import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { MarkdownRemarkConnection, MdxConnection } from "../types";
import PostTeaser from "../components/PostTeaser";

interface IndexPageProps extends PageProps {
  data: {
    posts: MdxConnection;
  };
}

function IndexPage(props: IndexPageProps) {
  const { data, location } = props;
  const { posts } = data;
  return (
    <Layout location={location} header={{ title: "Daniel Noyola" }}>
      {posts.nodes.map((post) => (
        <PostTeaser key={post.id} post={post} />
      ))}
    </Layout>
  );
}

export const query = graphql`
  query indexPageQuery {
    posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          tags
          date
          author {
            id
          }
        }
      }
    }
  }
`;

export default IndexPage;
