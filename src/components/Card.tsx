import React from "react";

const HQCard: React.FC = (props) => {
  return (
    <div className="rounded p-3 h-full border-2 border-primary mt-3 shadow-lg">
      {props.children}
    </div>
  );
};

export default HQCard;
