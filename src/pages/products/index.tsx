import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { MarkdownFile } from "../../types";
import { StaticImage } from "gatsby-plugin-image";

interface ProductCategoryCardProps {
  photo: React.ReactNode;
  title: string;
  to: string;
  html: string;
}

const ProductCategoryCard: React.FC<ProductCategoryCardProps> = (props) => {
  return (
    <Link className="group" to={props.to}>
      <Card>
        <div className="h-full flex flex-col justify-around">
          <h1 className="text-primary text-3xl group-hover:underline">
            {props.title}
          </h1>
          <div className="mt-3">{props.photo}</div>
          <div
            className="mt-3 prose max-w-none"
            dangerouslySetInnerHTML={{ __html: props.html }}
          />
        </div>
      </Card>
    </Link>
  );
};

interface ProductsPageQuery {
  constructionDesc: MarkdownFile;
  financeDesc: MarkdownFile;
  techDesc: MarkdownFile;
  consumerDesc: MarkdownFile;
}

const PRODUCTS_PAGE_QUERY = graphql`
  query ProductPageQuery {
    constructionDesc: file(
      relativePath: { eq: "products/construction_desc.md" }
    ) {
      childMarkdownRemark {
        html
      }
    }
    financeDesc: file(relativePath: { eq: "products/finance_desc.md" }) {
      childMarkdownRemark {
        html
      }
    }
    techDesc: file(relativePath: { eq: "products/tech_desc.md" }) {
      childMarkdownRemark {
        html
      }
    }
    consumerDesc: file(relativePath: { eq: "products/consumer_desc.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;

const ProductsPage: React.FC = () => {
  const query = useStaticQuery<ProductsPageQuery>(PRODUCTS_PAGE_QUERY);

  return (
    <Layout title="Products" path="/products">
      <h1 className="text-6xl text-primary">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProductCategoryCard
          title="Technology"
          photo={
            <StaticImage
              src="../../images/products/tech_desc.jpg"
              alt="A rack of servers."
            />
          }
          to="/products/technology"
          html={query.techDesc.childMarkdownRemark.html}
        />
        <ProductCategoryCard
          title="Finance"
          photo={
            <StaticImage
              src="../../images/products/finance_desc.jpg"
              alt="A stock chart on a laptop."
            />
          }
          to="/products/finance"
          html={query.financeDesc.childMarkdownRemark.html}
        />
        <ProductCategoryCard
          title="Consumer Goods"
          photo={
            <StaticImage
              src="../../images/products/consumer_desc.jpg"
              alt="A shopping mall."
            />
          }
          to="/products/consumer"
          html={query.consumerDesc.childMarkdownRemark.html}
        />
        <ProductCategoryCard
          title="Construction"
          photo={
            <StaticImage
              src="../../images/products/construction_desc.jpg"
              alt="Office buildings under construction."
            />
          }
          to="/products/construction"
          html={query.constructionDesc.childMarkdownRemark.html}
        />
      </div>
    </Layout>
  );
};

export default ProductsPage;
