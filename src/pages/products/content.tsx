import React from "react";

import Layout from "../../components/Layout";

import { ProductQuery } from "../../types";
import { graphql, useStaticQuery } from "gatsby";
import { ProductPageLayout } from "../../components/products";

const CONTENT_QUERY = graphql`
  query ContentQuery {
    products: allFile(
      filter: { relativePath: { glob: "products/content/*.md" } }
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

const ContentProductPage: React.FC = () => {
  const query = useStaticQuery<ProductQuery>(CONTENT_QUERY);

  return (
    <Layout title="Content" path="/products/content">
      <ProductPageLayout title="Content" products={query.products.nodes} />
    </Layout>
  );
};

export default ContentProductPage;
