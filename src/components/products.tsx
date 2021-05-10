import { Link } from "gatsby";
import React from "react";
import Card from "./Card";
import { MarkdownFile } from "../types";
import { ProductFrontMatter } from "../types";

interface ProductCardProps {
  name: string;
  tagline: string;
  html: string;
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <Card>
      <h1 className="text-primary text-3xl">{props.name}</h1>
      <h3 className="text-lg">{props.tagline}</h3>
      <div
        className="prose max-w-none mt-3"
        dangerouslySetInnerHTML={{
          __html: props.html,
        }}
      />
    </Card>
  );
};

interface ProductPageLayoutProps {
  title: string;
  products: MarkdownFile<ProductFrontMatter>[];
}

export const ProductPageLayout: React.FC<ProductPageLayoutProps> = (props) => {
  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="text-6xl text-primary">{props.title}</h1>
        <Link className="text-lg text-primary underline" to="/products">
          Back
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {props.products.map((product) => (
          <ProductCard
            name={product.childMarkdownRemark.frontmatter.name}
            tagline={product.childMarkdownRemark.frontmatter.tagline}
            html={product.childMarkdownRemark.html}
          />
        ))}
      </div>
    </>
  );
};
