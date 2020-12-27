import React, { ReactNode } from "react";
import { WindowLocation } from "@reach/router";
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
        <Main>{props.children}</Main>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;
