import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";
import React from "react";

interface HQCardProps {
  name: string;
  location: string;
  html: string;
  photo: IGatsbyImageData;
}

const HQCard: React.FC<HQCardProps> = (props) => {
  return (
    <div className="rounded p-3 border-2 border-primary mt-3 shadow-lg">
      {props.children}
    </div>
  );
};

export default HQCard;
