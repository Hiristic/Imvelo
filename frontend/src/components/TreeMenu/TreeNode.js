import React from "react";
import styled from "styled-components";
import Sub from "../../assets/images/sub-non.svg";
import { Span } from "../common/Typography";
import PlusIcon from "../../assets/images/plusIcon.svg";
import MinusIcon from "../../assets/images/minusIcon.svg";
import OptionsIcon from "../../assets/images/options.svg";

const StyledTreeNode = styled.div`
  font-size: 0.9em;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  margin-left: ${({ level }) => (level === 0 ? 10 : level * 40)}px;
  border-radius: 6px;
  cursor: pointer;

  ${({ level }) =>
    level === 0 &&
    ` 
   background: #fcfcfd;
  margin-bottom: 4px;
  `}

  ${({ isActive }) =>
    isActive &&
    `
    background: #e2f3ea;
    color: #2AAC64;
  `}
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: 10px;
`;

const TreeNode = (props) => {
  const {
    node,
    getChildNodes,
    level = 0,
    onToggle,
    onNodeSelect,
    activeNode,
  } = props;

  const isActive = activeNode === node?.id;

  return (
    <>
      <StyledTreeNode level={level} isActive={isActive}>
        {node?.children?.length > 0 ? (
          <NodeIcon onClick={() => onToggle(node)}>
            {node?.isOpen ? (
              <img alt={"minus"} src={MinusIcon} />
            ) : (
              <img alt={"plus"} src={PlusIcon} />
            )}
          </NodeIcon>
        ) : (
          <img style={{ marginRight: 10 }} src={Sub} />
        )}

        <Span
          color={"inherit"}
          fontSize={"inherit"}
          role="button"
          onClick={() => onNodeSelect(node)}
        >
          {node?.path}
        </Span>

        {node?.productCount && (
          <Span
            color={"inherit"}
            fontSize={"inherit"}
            marginLeft={"5px"}
            textWeight={400}
          >
            ({node?.productCount})
          </Span>
        )}
        {isActive && <img style={{ marginLeft: "auto" }} src={OptionsIcon} />}
      </StyledTreeNode>

      {node?.isOpen &&
        getChildNodes(node).map((childNode, index) => (
          <TreeNode
            key={index}
            {...props}
            node={childNode}
            isActive={isActive}
            level={level + 1}
          />
        ))}
    </>
  );
};

export default TreeNode;
