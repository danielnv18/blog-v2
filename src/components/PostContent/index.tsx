import React, { createElement } from "react";
import rehypeReact from "rehype-react";

const renderAst =  rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler;

// const test = new RehypeReact({}).Com;

const Ast = ({ ast, ...props }: any) => {
  ast.properties = props;
  return renderAst(ast);
};

export interface PostContentProps {
  htmlAst: any;
}

const PostContent: React.FunctionComponent<PostContentProps> = ({
  htmlAst,
}) => {
  return (
    <section className="post-full-content">
      {/* TODO: this will apply the class when rehype-react is published https://github.com/rhysd/rehype-react/pull/11 */}
      <Ast className="post-content" ast={htmlAst} />
    </section>
  );
};

export default PostContent;
