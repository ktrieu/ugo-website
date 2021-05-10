import React from "react";

import Layout from "../../components/Layout";
import Card from "../../components/Card";

import { ProductQuery } from "./types";
import { graphql, useStaticQuery } from "gatsby";
import { ProductPageLayout } from "./components";

const TECH_QUERY = graphql`
  query TechQuery {
    products: allFile(
      filter: { relativePath: { glob: "products/consumer/*.md" } }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            name
            tagline
          }
          html
        }
      }
    }
  }
`;

const TechnologyProductPage: React.FC = () => {
  const query = useStaticQuery<ProductQuery>(TECH_QUERY);

  return (
    <Layout title="Technology" path="/products/technology">
      <ProductPageLayout title="Technology" products={query.products.nodes} />
    </Layout>
  );
};

export default TechnologyProductPage;
