import { IGatsbyImageData } from "gatsby-plugin-image";

export interface MarkdownFile {
  childMarkdownRemark: {
    html: string;
  };
}

export interface GraphQLImage {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}
