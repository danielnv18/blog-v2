import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { SanityBlock } from "../../types";

interface BlockProps {
  blocks: Array<SanityBlock>;
}

const serializers = {
  types: {
    span: (props) => <p>{props.node.text}</p>,
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

function Block(props: BlockProps) {
  return <BlockContent blocks={props.blocks} serializers={serializers} />;
}

export default Block;
