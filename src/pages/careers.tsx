import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Card from "../components/Card";
import { CollapseCard } from "../components/CollapseCard";
import Layout from "../components/Layout";
import { MarkdownFile } from "../types";

interface PositionFrontmatter {
  title: string;
}

interface CareersPageQuery {
  introHtml: MarkdownFile;
  positions: {
    edges: Array<{
      node: MarkdownFile<PositionFrontmatter>;
    }>;
  };
}

const CAREERS_PAGE_QUERY = graphql`
  query {
    introHtml: file(relativePath: { eq: "careers/intro.md" }) {
      childMarkdownRemark {
        html
      }
    }
    positions: allFile(
      filter: { relativePath: { glob: "careers/positions/*.md" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;

const CareersPage: React.FC = (props) => {
  const query = useStaticQuery<CareersPageQuery>(CAREERS_PAGE_QUERY);

  return (
    <Layout title="Careers" path="/careers">
      <h1 className="text-primary text-6xl">Careers</h1>
      <div
        className="prose max-w-none mt-3"
        dangerouslySetInnerHTML={{
          __html: query.introHtml.childMarkdownRemark.html,
        }}
      />
      <div className="mt-6">
        {query.positions.edges.map((position) => (
          <CollapseCard
            title={position.node.childMarkdownRemark.frontmatter.title}
          >
            <div
              className="prose max-w-none mt-3"
              dangerouslySetInnerHTML={{
                __html: position.node.childMarkdownRemark.html,
              }}
            />
          </CollapseCard>
        ))}
      </div>
    </Layout>
  );
};

export default CareersPage;
