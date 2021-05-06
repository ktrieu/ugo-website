import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MarkdownFile, GraphQLImage } from "../types";
import Card from "../components/Card";

import Layout from "../components/Layout";

interface HQMarkdownFrontmatter {
  name: string;
  location: string;
  photo: GraphQLImage;
}

interface AboutPageQuery {
  introHtml: MarkdownFile;
  valuesHtml: MarkdownFile;
  hqs: {
    edges: Array<{
      node: MarkdownFile<HQMarkdownFrontmatter>;
    }>;
  };
}

const ABOUT_PAGE_QUERY = graphql`
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
    hqs: allFile(filter: { relativePath: { glob: "about/hqs/*.md" } }) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              name
              location
              photo {
                childImageSharp {
                  gatsbyImageData(transformOptions: { fit: INSIDE })
                }
              }
            }
          }
        }
      }
    }
  }
`;

const AboutPage: React.FC = () => {
  const query = useStaticQuery<AboutPageQuery>(ABOUT_PAGE_QUERY);

  return (
    <Layout title="About" path="/about">
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
      <h1 className="text-primary text-6xl mt-6">Our Headquarters</h1>
      <div className="mt-6">
        {query.hqs.edges.map((hq) => {
          const {
            name,
            location,
            photo,
          } = hq.node.childMarkdownRemark.frontmatter;
          const html = hq.node.childMarkdownRemark.html;
          return (
            <Card>
              <h1 className="text-primary text-6xl">{name}</h1>
              <h6 className="text-2xl bold">{location}</h6>
              <div className="mt-3">
                <GatsbyImage
                  className="w-100 h-auto"
                  image={photo.childImageSharp.gatsbyImageData}
                  alt={name}
                  objectFit="scale-down"
                />
                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
};

export default AboutPage;
