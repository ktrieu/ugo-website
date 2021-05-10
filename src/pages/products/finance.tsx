import React from "react";

import Layout from "../../components/Layout";

import { ProductQuery } from "../../types";
import { graphql, useStaticQuery } from "gatsby";
import { ProductPageLayout } from "../../components/products";

const FINANCE_QUERY = graphql`
  query FinanceQuery {
    products: allFile(
      filter: { relativePath: { glob: "products/finance/*.md" } }
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

const FinanceProductPage: React.FC = () => {
  const query = useStaticQuery<ProductQuery>(FINANCE_QUERY);

  return (
    <Layout title="Finance" path="/products/finance">
      <ProductPageLayout title="Finance" products={query.products.nodes} />
    </Layout>
  );
};

export default FinanceProductPage;
