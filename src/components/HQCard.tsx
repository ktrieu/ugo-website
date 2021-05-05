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
    <div className="rounded p-3 border border-primary mt-3">
      <h1 className="text-primary text-6xl">{props.name}</h1>
      <h6 className="text-2xl bold">{props.location}</h6>
      <div className="mt-3">
        <GatsbyImage
          className="w-100 h-auto"
          image={props.photo}
          alt={props.name}
          objectFit="scale-down"
        />
        <div
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </div>
    </div>
  );
};

export default HQCard;
