import React, { ReactNode } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Footer from "./Footer";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding-right: 0;
`;

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: ReactNode;
}

interface withLayoutProps {}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navigation />
      <PageWrapper>
        {props.children}
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  props = {}
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location} {...props}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
