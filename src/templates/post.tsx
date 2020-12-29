import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Block from "../components/Block";
import { SanityPost } from "../types";
import { Inner } from "../utils/styles";

interface PostTemplateProps extends PageProps {
  data: {
    post: SanityPost;
  };
}

function PostTemplate({ data, location }: PostTemplateProps) {
  const { post } = data;
  return (
    <Layout
      location={location}
      header={{ title: post.title, cover: post.mainImage.asset.fluid }}
    >
      <article className="post">
        <Inner>
          <section className="post-content">
            <Block blocks={post._rawBody} />
          </section>
        </Inner>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      title
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
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
      _rawBody
    }
  }
`;

export default PostTemplate;
