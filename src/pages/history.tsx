import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import { GraphQLImage, MarkdownFile } from "../types";
import { GatsbyImage } from "gatsby-plugin-image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface HistoryFrontmatter {
  photo: GraphQLImage;
  year: string;
  photo_credit: string;
}

interface TimelineProps {
  files: MarkdownFile<HistoryFrontmatter>[];
}

const Timeline: React.FC<TimelineProps> = (props) => {
  const [idx, setIdx] = useState<number>(0);

  const canNavigateLeft = idx > 0;
  const canNavigateRight = idx < props.files.length - 1;

  const navigateLeft = () => {
    setIdx((idx) => idx - 1);
  };

  const navigateRight = () => {
    setIdx((idx) => idx + 1);
  };

  const file = props.files[idx];

  return (
    <div className="flex-grow flex flex-col">
      <div className="flex-grow">
        <Card>
          <div className="flex flex-col h-full">
            <GatsbyImage
              className="w-full flex-grow"
              image={
                file.childMarkdownRemark.frontmatter.photo.childImageSharp
                  .gatsbyImageData
              }
              alt={""}
            />
            <a
              className="block w-full text-right text-xs mt-1"
              href={file.childMarkdownRemark.frontmatter.photo_credit}
            >
              Image Credit
            </a>
            <div
              className="prose max-w-none mt-3"
              dangerouslySetInnerHTML={{
                __html: file.childMarkdownRemark.html,
              }}
            />
          </div>
        </Card>
      </div>
      <div className="flex-grow-0 mt-3">
        <Card>
          <div className="flex justify-between items-center text-primary my-auto">
            <button
              className="border border-primary rounded p-3 hover:bg-primary hover:text-white fill-current"
              disabled={!canNavigateLeft}
              onClick={navigateLeft}
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-2xl">
              {file.childMarkdownRemark.frontmatter.year}
            </h1>
            <button
              className="border border-primary rounded p-3 hover:bg-primary hover:text-white fill-current"
              disabled={!canNavigateRight}
              onClick={navigateRight}
            >
              <FaArrowRight />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

interface HistoryPageQuery {
  historyFiles: {
    nodes: MarkdownFile<HistoryFrontmatter>[];
  };
}

const HISTORY_PAGE_QUERY = graphql`
  query HistoryPageQuery {
    historyFiles: allFile(filter: { relativePath: { glob: "history/*.md" } }) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            year
            photo {
              childImageSharp {
                gatsbyImageData(transformOptions: { fit: FILL })
              }
            }
            photo_credit
          }
          html
        }
      }
    }
  }
`;

const HistoryPage: React.FC = () => {
  const query = useStaticQuery<HistoryPageQuery>(HISTORY_PAGE_QUERY);

  return (
    <Layout title="History" path="/history">
      <div className="h-screen flex flex-col py-3">
        <h1 className="text-primary text-6xl">History</h1>
        <Timeline files={query.historyFiles.nodes} />
      </div>
    </Layout>
  );
};

export default HistoryPage;
