import styled from "styled-components";

const ListWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAnchor = styled.a`
  color: ${(props) => props.theme.colors.components.anchor.text};

  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.components.anchor.textHover};
  }
`;

export { ListWrapper, StyledAnchor };
