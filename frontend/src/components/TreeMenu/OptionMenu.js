import OptionsIcon from "../../assets/images/options.svg";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Text } from "../common/Typography";
import { optionsItems } from "../../config/optionsItems";
import useEventListener from "../../hooks/useEventListener";

const Wrapper = styled.div`
  margin-left: auto;
  position: relative;
`;

const OptionOpened = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  background-color: #062b42;
  z-index: 100;
  border-radius: 4px;
  padding: 9px;
  white-space: nowrap;
`;

const TextItem = styled(Text)`
  padding: 9px;
  font-weight: 500;
  border-radius: 2px;
  color: ${({ color }) => color || "#fff"};

  &:hover {
    background-color: #193a4f;
  }
`;

const OptionMenu = ({ onOptionPress, isOpen, setOpen }) => {
  const ref = useRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target) && isOpen) {
        setOpen(false);
      }
    },
    [setOpen, ref, isOpen]
  );
  useEventListener("click", handleClickOutside);

  return (
    <Wrapper>
      <div onClick={() => setOpen((lastState) => !lastState)}>
        <img ref={ref} alt={"options icon"} src={OptionsIcon} />
      </div>

      {isOpen && (
        <OptionOpened>
          {optionsItems?.map((res) => (
            <TextItem
              key={res.id}
              color={res.color}
              onClick={() => onOptionPress(res)}
            >
              {res.name}
            </TextItem>
          ))}
        </OptionOpened>
      )}
    </Wrapper>
  );
};

export default OptionMenu;
