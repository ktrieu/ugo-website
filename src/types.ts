import { IGatsbyImageData } from "gatsby-plugin-image";

export interface MarkdownFile<TFrontmatter = {}> {
  childMarkdownRemark: {
    frontmatter: TFrontmatter;
    html: string;
  };
}

export interface GraphQLImage {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface ProductFrontMatter {
  name: string;
  tagline: string;
}

export interface ProductQuery {
  products: {
    nodes: MarkdownFile<ProductFrontMatter>[];
  };
}
