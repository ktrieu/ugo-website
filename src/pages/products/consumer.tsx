import React from "react";

import Layout from "../../components/Layout";
import Card from "../../components/Card";

import { ProductQuery } from "./types";
import { graphql, useStaticQuery } from "gatsby";
import { ProductPageLayout } from "./components";

const CONSUMER_QUERY = graphql`
  query ConsumerQuery {
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

const ConsumerProductPage: React.FC = () => {
  const query = useStaticQuery<ProductQuery>(CONSUMER_QUERY);

  return (
    <Layout title="Consumer Goods" path="/products/consumer">
      <ProductPageLayout
        title="Consumer Goods"
        products={query.products.nodes}
      />
    </Layout>
  );
};

export default ConsumerProductPage;
