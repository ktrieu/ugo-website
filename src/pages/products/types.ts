import { graphql } from "gatsby";
import { MarkdownFile } from "../../types";

export interface ProductFrontMatter {
  name: string;
  tagline: string;
}

export interface ProductQuery {
  products: {
    nodes: MarkdownFile<ProductFrontMatter>[];
  };
}
