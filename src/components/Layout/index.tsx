import React, { ReactNode } from "react";

import { PageWrapper } from "./styles";
import Navigation from "./../Navigation";
import Footer from "./../Footer";

interface LayoutProps {
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
