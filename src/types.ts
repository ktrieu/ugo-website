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
