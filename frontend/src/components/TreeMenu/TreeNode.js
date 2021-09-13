import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Sub from "../../assets/images/sub-non.svg";
import { Span } from "../common/Typography";
import PlusIcon from "../../assets/images/plusIcon.svg";
import MinusIcon from "../../assets/images/minusIcon.svg";
import OptionMenu from "./OptionMenu";
import useEventListener from "../../hooks/useEventListener";

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
  ${({ isChosen }) =>
    isChosen &&
    `
   color:#c1bfbf;
   cursor: not-allowed;
  
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
    onOptionPress,
    chosenId,
    isMoving,
  } = props;

  const isActive = activeNode === node?.id;
  const isChoosen = chosenId === node?.id;
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpened(false);
      }
    },
    [setIsOpened, ref]
  );
  useEventListener("contextmenu", handleClickOutside);

  const onNodeClick = (e) => {
    if (e.type === "contextmenu" && !isMoving) {
      e.preventDefault();
      onNodeSelect(node);
      setIsOpened(true);
      console.log("Right click");
    }
  };

  return (
    <>
      <StyledTreeNode
        ref={ref}
        onClick={onNodeClick}
        onContextMenu={onNodeClick}
        level={level}
        isActive={isActive}
        isChosen={isChoosen}
      >
        {!isChoosen ? (
          node?.children?.length > 0 ? (
            <NodeIcon onClick={() => onToggle(node)}>
              {node?.isOpen ? (
                <img alt={"minus"} src={MinusIcon} />
              ) : (
                <img alt={"plus"} src={PlusIcon} />
              )}
            </NodeIcon>
          ) : (
            <img style={{ marginRight: 10 }} src={Sub} />
          )
        ) : null}

        <Span
          color={"inherit"}
          fontSize={"inherit"}
          role="button"
          onClick={() => !isChoosen && onNodeSelect(node)}
        >
          {node?.name}
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
        {isActive && !isMoving && (
          <OptionMenu
            setOpen={setIsOpened}
            isOpen={isOpened}
            onOptionPress={onOptionPress}
          />
        )}
      </StyledTreeNode>

      {node?.isOpen &&
        getChildNodes(node).map((childNode, index) => (
          <TreeNode {...props} key={index} node={childNode} level={level + 1} />
        ))}
    </>
  );
};

export default TreeNode;
