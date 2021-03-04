import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
import { format } from "date-fns";
import { MarkdownRemark, Mdx } from "../../types";
import { ArticleTeaser } from "./styles";
import { Inner } from "../../utils/styles";

interface PostTeaserProps {
  post: Mdx;
}

function PostTeaser(props: PostTeaserProps) {
  const { post } = props;
  const date = new Date(post.frontmatter.date);
  return (
    <ArticleTeaser className="post">
      <Inner>
        <div className="box">
          <h2 className="post-title">
            <Link to={`/blog/${post.fields.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <span className="post-meta">
            By {` `}
            <Link to={`/author/${kebabCase(post.frontmatter.author.id)}`}>
              {post.frontmatter.author.id}
            </Link>
            {` `} in {` `}
            <Link
              className="post-meta-tag"
              to={`/tags/${kebabCase(post.frontmatter.tags[0])}`}
            >
              {post.frontmatter.tags[0]}
            </Link>
            {` `} on {` `}
            <time dateTime={format(date, "dd-MM-yyyy")}>
              {format(date, "dd MMM, yyyy")}
            </time>
          </span>
          <p className="post-excerpt">{post.excerpt} </p>
        </div>
      </Inner>
    </ArticleTeaser>
  );
}

export default PostTeaser;
