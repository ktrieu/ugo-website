import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Card from "./Card";

interface CollapseCardProps {
  title: string;
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

export const CollapseCard: React.FC<CollapseCardProps> = (props) => {
  const [internalCollapsed, internalSetCollapsed] = useState<boolean>(true);

  const collapsed = props.collapsed || internalCollapsed;
  const setCollapsed = props.setCollapsed || internalSetCollapsed;

  return (
    <Card>
      <div className="flex">
        <button
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          {collapsed ? <FaChevronRight /> : <FaChevronDown />}
        </button>
        <h1 className="text-primary ml-3 text-3xl">{props.title}</h1>
      </div>
      {!collapsed && props.children}
    </Card>
  );
};
