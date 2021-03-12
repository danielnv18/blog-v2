import React, { ReactNode } from "react";
import { WindowLocation } from "@reach/router";
import { MDXProvider } from "@mdx-js/react";

import { PageWrapper, Main } from "./styles";
import Navigation from "./../Navigation";
import Header, { HeaderProps } from "./../Header";
import Footer from "./../Footer";

interface LayoutProps {
  location: WindowLocation;
  children: ReactNode;
  header: HeaderProps;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navigation location={props.location} />
      <PageWrapper>
        <Header {...props.header} />
        <Main>
          <MDXProvider>{props.children}</MDXProvider>
        </Main>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;
