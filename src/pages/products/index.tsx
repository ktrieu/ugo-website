import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { GraphQLImage, MarkdownFile } from "../../types";
import { GatsbyImage } from "gatsby-plugin-image";

interface ProductCategoryCardProps {
  photo: GraphQLImage;
  alt: string;
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
          <GatsbyImage
            className="mt-3 flex-grow"
            image={props.photo.childImageSharp.gatsbyImageData}
            alt={props.alt}
          />
          <div
            className="mt-3 prose max-w-none"
            dangerouslySetInnerHTML={{ __html: props.html }}
          />
        </div>
      </Card>
    </Link>
  );
};

interface ProductCategoryFrontmatter {
  photo: GraphQLImage;
}

interface ProductsPageQuery {
  constructionDesc: MarkdownFile<ProductCategoryFrontmatter>;
  financeDesc: MarkdownFile<ProductCategoryFrontmatter>;
  techDesc: MarkdownFile<ProductCategoryFrontmatter>;
  consumerDesc: MarkdownFile<ProductCategoryFrontmatter>;
}

const PRODUCTS_PAGE_QUERY = graphql`
  query ProductPageQuery {
    constructionDesc: file(
      relativePath: { eq: "products/construction_desc.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          photo {
            childImageSharp {
              gatsbyImageData(transformOptions: { fit: COVER })
            }
          }
        }
        html
      }
    }
    financeDesc: file(relativePath: { eq: "products/finance_desc.md" }) {
      childMarkdownRemark {
        frontmatter {
          photo {
            childImageSharp {
              gatsbyImageData(transformOptions: { fit: COVER })
            }
          }
        }
        html
      }
    }
    techDesc: file(relativePath: { eq: "products/tech_desc.md" }) {
      childMarkdownRemark {
        frontmatter {
          photo {
            childImageSharp {
              gatsbyImageData(transformOptions: { fit: COVER })
            }
          }
        }
        html
      }
    }
    consumerDesc: file(relativePath: { eq: "products/consumer_desc.md" }) {
      childMarkdownRemark {
        frontmatter {
          photo {
            childImageSharp {
              gatsbyImageData(transformOptions: { fit: COVER })
            }
          }
        }
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
          photo={query.techDesc.childMarkdownRemark.frontmatter.photo}
          alt="A rack of servers."
          to="/products/technology"
          html={query.techDesc.childMarkdownRemark.html}
        />
        <ProductCategoryCard
          title="Finance"
          photo={query.financeDesc.childMarkdownRemark.frontmatter.photo}
          alt="A stock chart on a laptop."
          to="/products/finance"
          html={query.financeDesc.childMarkdownRemark.html}
        />
        <ProductCategoryCard
          title="Consumer Goods"
          photo={query.consumerDesc.childMarkdownRemark.frontmatter.photo}
          alt="A shopping mall."
          to="/products/consumer"
          html={query.consumerDesc.childMarkdownRemark.html}
        />
        <ProductCategoryCard
          title="Construction"
          photo={query.constructionDesc.childMarkdownRemark.frontmatter.photo}
          alt="Office buildings under construction."
          to="/products/construction"
          html={query.constructionDesc.childMarkdownRemark.html}
        />
      </div>
    </Layout>
  );
};

export default ProductsPage;
