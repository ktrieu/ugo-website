import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import Layout from "../components/Layout";

interface MarkdownFile {
  childMarkdownRemark: {
    html: string;
  };
}

interface AboutPageQuery {
  introHtml: MarkdownFile;
  valuesHtml: MarkdownFile;
}

const AboutPage: React.FC = () => {
  const query = useStaticQuery<AboutPageQuery>(graphql`
    query AboutPageQuery {
      introHtml: file(relativePath: { eq: "about/intro.md" }) {
        childMarkdownRemark {
          html
        }
      }
      valuesHtml: file(relativePath: { eq: "about/values.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <Layout>
      <h1 className="text-primary text-6xl">About Us</h1>
      <div
        className="prose max-w-none mt-3"
        dangerouslySetInnerHTML={{
          __html: query.introHtml.childMarkdownRemark.html,
        }}
      />
      <h1 className="text-primary text-6xl mt-6">Our Core Values</h1>
      <div
        className="prose max-w-none mt-3"
        dangerouslySetInnerHTML={{
          __html: query.valuesHtml.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

export default AboutPage;
