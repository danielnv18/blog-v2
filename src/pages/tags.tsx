import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

interface TagsPageProps extends PageProps {}

function TagsPage(props: TagsPageProps) {
  const { location } = props;

  return (
    <Layout location={location} header={{ title: "Tags" }}>
      <h1>Tags Page</h1>
    </Layout>
  );
}

export default TagsPage;
