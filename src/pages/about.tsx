import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import React from "react";
import HQCard from "../components/HQCard";

import Layout from "../components/Layout";

interface MarkdownFile {
  childMarkdownRemark: {
    html: string;
  };
}

interface HQMarkdown {
  node: {
    childMarkdownRemark: {
      html: string;
      frontmatter: {
        name: string;
        location: string;
        photo: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    };
  };
}

interface AboutPageQuery {
  introHtml: MarkdownFile;
  valuesHtml: MarkdownFile;
  hqs: {
    edges: HQMarkdown[];
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
      <h1 className="text-primary text-6xl mt-6">Our Headquarters</h1>
      <div className="mt-6">
        {query.hqs.edges.map((hq) => (
          <HQCard
            name={hq.node.childMarkdownRemark.frontmatter.name}
            key={hq.node.childMarkdownRemark.frontmatter.name}
            location={hq.node.childMarkdownRemark.frontmatter.location}
            photo={
              hq.node.childMarkdownRemark.frontmatter.photo.childImageSharp
                .gatsbyImageData
            }
            html={hq.node.childMarkdownRemark.html}
          />
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;
