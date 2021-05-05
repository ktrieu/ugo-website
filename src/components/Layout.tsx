import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";

interface LayoutProps {
  title: string;
  path: string;
}

interface LayoutQuery {
  site: {
    siteMetadata: {
      title: string;
      titleTemplate: string;
      description: string;
      url: string;
    };
  };
}

const LAYOUT_QUERY = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        url
      }
    }
  }
`;

const Layout: React.FC<LayoutProps> = (props) => {
  const query = useStaticQuery<LayoutQuery>(LAYOUT_QUERY);

  return (
    <>
      <Helmet>
        <title>
          {query.site.siteMetadata.titleTemplate.replace("%s", props.title)}
        </title>
        <link rel="canonical" href={query.site.siteMetadata.url + props.path} />
        <meta
          name="description"
          content={query.site.siteMetadata.description}
        />
      </Helmet>
      <Navbar />
      <div className="p-3">
        <div className="my-3 mx-auto max-w-screen-lg">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
