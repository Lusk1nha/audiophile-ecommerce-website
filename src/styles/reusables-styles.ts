import styled, { css } from "styled-components";

type WrapperProps = {
  $maxWidth?: number | string;
  $maxHeight?: number | string;
  $justifyContent?: "flex-start" | "flex-end" | "center";
  $alignItems?: "flex-start" | "flex-end" | "center";
  $flex?: number | "none" | "unset";
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 100%;

  ${(props) =>
    props.$maxWidth !== null &&
    props.$maxWidth !== undefined &&
    css`
      max-width: ${props.$maxWidth};
    `}

  ${(props) =>
    props.$maxHeight !== null &&
    props.$maxHeight !== undefined &&
    css`
      max-height: ${props.$maxHeight};
    `}

  ${(props) =>
    props.$justifyContent &&
    css`
      justify-content: ${props.$justifyContent};
    `}

  ${(props) =>
    props.$alignItems &&
    css`
      align-items: ${props.$alignItems};
    `}

    ${(props) =>
    props.$flex !== null &&
    props.$flex !== undefined &&
    css`
      flex: ${props.$flex};
    `}
`;

const Flex = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  flex: 1;

  width: 100%;
  height: 100%;

  ${(props) =>
    props.$maxWidth !== null &&
    props.$maxWidth !== undefined &&
    css`
      max-width: ${props.$maxWidth};
    `}

  ${(props) =>
    props.$maxHeight !== null &&
    props.$maxHeight !== undefined &&
    css`
      max-height: ${props.$maxHeight};
    `}

  ${(props) =>
    props.$justifyContent &&
    css`
      justify-content: ${props.$justifyContent};
    `}

  ${(props) =>
    props.$alignItems &&
    css`
      align-items: ${props.$alignItems};
    `}

    ${(props) =>
    props.$flex !== null &&
    props.$flex !== undefined &&
    css`
      flex: ${props.$flex};
    `}
`;

const RawButton = styled.button`
  background: none;
  display: flex;
  border: none;
  outline: none;

  cursor: pointer;
`;

export { Wrapper, Flex, RawButton };
