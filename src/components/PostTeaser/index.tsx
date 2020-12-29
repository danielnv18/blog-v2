import React from "react";
import { Link } from "gatsby";
import { SanityPost } from "../../types";
import { ArticleTeaser } from "./styles";
import { nodeExcerpt } from "../../utils/helpers";
import { Inner } from "../../utils/styles";

interface PostTeaserProps {
  post: SanityPost;
}

function PostTeaser(props: PostTeaserProps) {
  const { post } = props;
  const span = nodeExcerpt(post.body);
  return (
    <ArticleTeaser className="post">
      <Inner>
        <div className="box">
          <h2 className="post-title">
            <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
          </h2>
          <span className="post-meta">
            By {` `}
            <Link to={`/author/${post.author.slug.current}`}>
              {post.author.name}
            </Link>
            {` `} in {` `}
            <Link
              className="post-meta-tag"
              to={`/tags/${post.categories[0].slug.current}`}
            >
              {post.categories[0].title}
            </Link>
            {` `} on {` `}
            <time dateTime="10-07-2019">10 Jul 2019</time>
          </span>
          <p className="post-excerpt">{span.text} </p>
        </div>
      </Inner>
    </ArticleTeaser>
  );
}

export default PostTeaser;
