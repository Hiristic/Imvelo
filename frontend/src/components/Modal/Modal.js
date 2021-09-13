import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Text } from "../common/Typography";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "display" : "none")};
  z-index: 200;
`;

const InnerModal = styled.section`
  position: fixed;
  width: ${(props) => props.width || "auto"};
  height: auto;
  min-width: 30%;
  max-height: 600px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 4px;
  //overflow-y: scroll;
  overflow: ${(props) => (props.noScroll ? "inerhit" : "auto")};
  padding: 48px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Modal = ({
  handleClose,
  show,
  children,
  noScroll = false,
  width,
  title,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  return (
    <>
      {show && (
        <ModalContainer show={show} onClick={handleClose}>
          <InnerModal
            onClick={(e) => e.stopPropagation()}
            noScroll={noScroll}
            width={width}
          >
            <ButtonWrapper>
              <Text fontSize={"1.37em"} fontWeight={500}>
                {title}
              </Text>
              <AiOutlineClose
                size={"1.5em"}
                style={{ cursor: "pointer" }}
                onClick={handleClose}
              />
            </ButtonWrapper>
            {children}
          </InnerModal>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
