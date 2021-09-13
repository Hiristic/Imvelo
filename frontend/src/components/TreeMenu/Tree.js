import React, { useState } from "react";
import TreeNode from "./TreeNode";
import Modal from "../Modal/Modal";
import { find, findIndex } from "lodash";
import { optionsItems } from "../../config/optionsItems";

const Tree = ({ onSelect, data }) => {
  const [nodes, setNodes] = useState(data);
  const [activeNode, setActiveNode] = useState(0);
  const [modalState, setModalState] = useState({ state: false, title: null });

  const getRootNodes = () => {
    return nodes.filter((node) => node.isRoot === true);
  };

  const getChildNodes = (node) => {
    if (!node.children) return [];
    return node.children.map((id) => {
      return nodes.find((element) => element.id === id);
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
    onSelect && onSelect(node);
  };

  const onOptions = (option) => {
    optionsItems.forEach((item) => {
      if (option?.id === item.id) {
        setModalState({ state: true, title: item?.modalTitle });
      }
    });

    //     setNodes((res) => {
    //       let index = findIndex(res, { id: activeNode });
    //       const copyOfArray = [...res];
    //       copyOfArray.push({
    //         id: copyOfArray.at(-1).id + 1,
    //         name: "New department",
    //         children: [],
    //       });
    //
    //       copyOfArray[index]?.children.push(copyOfArray.at(-1).id);
    //       return copyOfArray;
    //     });
  };

  const rootNodes = getRootNodes();

  return (
    <div>
      <Modal
        width={"40%"}
        show={modalState?.state}
        title={modalState?.title}
        handleClose={() =>
          setModalState((lastData) => {
            return { ...lastData, state: false };
          })
        }
      >
        <h1>test</h1>
      </Modal>
      {rootNodes.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          getChildNodes={getChildNodes}
          onToggle={onToggle}
          onNodeSelect={onNodeSelect}
          activeNode={activeNode}
          onOptionPress={onOptions}
        />
      ))}
    </div>
  );
};

export default Tree;
