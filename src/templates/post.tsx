import React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from "../components/Layout";
import { Mdx } from "../types";
import { Inner } from "../utils/styles";

interface PostTemplateProps extends PageProps {
  data: {
    post: Mdx;
  };
}

function PostTemplate({ data, location }: PostTemplateProps) {
  const { post } = data;
  return (
    <Layout
      location={location}
      header={{
        title: post.frontmatter.title,
        // cover: post.mainImage.asset.fluid,
      }}
    >
      <article className="post">
        <Inner>
          <section className="post-content">
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </Inner>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query BlogPostTemplateQuery($id: String) {
    post: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date
        title
        tags
        author {
          id
        }
      }
    }
  }
`;

export default PostTemplate;
