import { SanityBlock, SanitySpan } from "../types";

export function nodeExcerpt(blocks: Array<SanityBlock>): SanitySpan {
  const limit = 400;
  const blockIndex = blocks.findIndex((block) => block.children.length >= 0);

  const span = blocks[blockIndex].children.find((child) => child.text !== "");

  let trimmedString = span.text.substr(0, limit);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );

  return { ...span, ...{ text: `${trimmedString}...` } };
}
