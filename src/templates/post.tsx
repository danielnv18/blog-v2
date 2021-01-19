import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Block from "../components/PostContent";
import { MarkdownRemark } from "../types";
import { Inner } from "../utils/styles";
import PostContent from "../components/PostContent";

interface PostTemplateProps extends PageProps {
  data: {
    post: MarkdownRemark;
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
            {/* <PostContent htmlAst={post.htmlAst} /> */}
          </section>
        </Inner>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query BlogPostTemplateQuery($id: String) {
    post: markdownRemark(id: { eq: $id }) {
      id
      htmlAst
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
