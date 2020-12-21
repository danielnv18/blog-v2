import React from "react";
import { PageProps } from "gatsby";
import { withLayout } from "../components/Layout";

interface TagsPageProps extends PageProps {}

function TagsPage({ data }: TagsPageProps) {
  return (
    <>
      <h1>Tags Page</h1>
    </>
  );
}

export default withLayout(TagsPage);
