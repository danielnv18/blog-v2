import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

interface AboutPageProps extends PageProps {}

function AboutPage(props: AboutPageProps) {
  const { location } = props;

  return (
    <Layout location={location} header={{ title: "About" }}>
      <h1>About Page</h1>
    </Layout>
  );
}

export default AboutPage;
