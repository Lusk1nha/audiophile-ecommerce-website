import styled from "styled-components";
import { Wrapper } from "../../styles/reusables-styles";

const StyledHome = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  row-gap: 2.5rem;
`;

const StartHomeWrapper = styled(Wrapper)`
  background: #191919;
`;

const ContentList = styled.ul`
  max-width: 425px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  padding: 2.5rem 1.5rem 7.5rem;
  gap: 4.25rem;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 860px;

    padding: 4.25rem 2.5rem;
    flex-direction: row;
    gap: 0.625rem;
  }

  @media (min-width: ${(props) => props.theme.sizes.desktop}) {
    max-width: 1100px;
    padding: 4.25rem 0;
  }
`;

export { StyledHome, StartHomeWrapper, ContentList };
