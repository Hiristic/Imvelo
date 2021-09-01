import React, { useState } from "react";
import TreeNode from "./TreeNode";

const data = [
  {
    id: 0,
    path: "Imvelo",
    isRoot: true,
    productCount: 100,
    children: ["David", "Slancer"],
  },
  {
    id: 1,
    path: "David",
    productCount: 200,
    children: ["readme.md"],
  },
  {
    id: 2,
    path: "readme.md",
    productCount: 50,
    children: [],
  },
  {
    id: 3,
    path: "Slancer",
    children: ["Vblogs", "Projects"],
  },
  {
    id: 4,
    path: "Projects",
    productCount: 150,
    children: ["Treeview"],
  },
  {
    id: 5,
    path: "Treeview",
    children: [],
  },
  {
    id: 6,
    path: "Vblogs",
    children: [],
  },
];

const Tree = ({ onSelect }) => {
  const [nodes, setNodes] = useState(data);
  const [activeNode, setActiveNode] = useState(0);

  const getRootNodes = () => {
    return nodes.filter((node) => node.isRoot === true);
  };

  const getChildNodes = (node) => {
    if (!node.children) return [];
    return node.children.map((path) => {
      return nodes.find((element) => element.path === path);
    });
  };

  const onToggle = (node) => {
    const copyOfNodes = [...nodes];
    const objIndex = nodes.findIndex((obj) => obj.id === node?.id);
    copyOfNodes[objIndex].isOpen = !node.isOpen;
    setNodes(copyOfNodes);
  };

  const onNodeSelect = (node) => {
    setActiveNode(node?.id);
    onSelect(node);
  };

  const rootNodes = getRootNodes();

  return (
    <div>
      {rootNodes.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          getChildNodes={getChildNodes}
          onToggle={onToggle}
          onNodeSelect={onNodeSelect}
          activeNode={activeNode}
        />
      ))}
    </div>
  );
};

export default Tree;
