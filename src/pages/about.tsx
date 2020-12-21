import React from "react";
import { PageProps } from "gatsby";
import { withLayout } from "../components/Layout";

interface AboutPageProps extends PageProps {}

function AboutPage({ data }: AboutPageProps) {
  return (
    <>
      <h1>About Page</h1>
    </>
  );
}

export default withLayout(AboutPage);
