import styled from "styled-components";
import { RawButton } from "../../styles/reusables-styles";

type StyledNavbarProps = {
  $isTranslucid?: boolean;
};

const StyledNavbar = styled.nav<StyledNavbarProps>`
  background: ${(props) => (props.$isTranslucid ? "transparent" : "black")};

  width: 100%;
  height: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuButton = styled(RawButton)`
  width: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 200ms linear;

  @media (min-width: ${(props) => props.theme.sizes.desktop}) {
    width: 0;
    height: 0;
    opacity: 0%;
    pointer-events: none;
    overflow: hidden;
  }
`;

const MobileFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  gap: 1rem;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    width: unset;
    gap: 2.625rem;
    justify-content: flex-start;
  }

  @media (min-width: ${(props) => props.theme.sizes.desktop}) {
    gap: 0;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  text-decoration: none;

  cursor: pointer;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    margin: unset;
  }
`;

const NavbarView = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem;
`;

const AnchorFlex = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.125rem;

  width: 0;
  height: 0;
  opacity: 0%;
  pointer-events: none;
  overflow: hidden;

  list-style: none;

  transition: opacity 200ms linear;

  @media (min-width: ${(props) => props.theme.sizes.desktop}) {
    width: unset;
    height: unset;
    opacity: 100%;
    pointer-events: unset;
    overflow: unset;
  }
`;

const Line = styled.div`
  background: white;
  width: 100%;
  height: 2px;
  opacity: 0.104;
`;

const MobileContent = styled.div`
  background: rgba(0, 0, 0, 0.65);

  width: 100%;
  height: auto;
  display: flex;

  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 5;

  @media (min-width: ${(props) => props.theme.sizes.desktop}) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  background-color: white;

  width: 100%;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 0px 8px 8px;

  z-index: 10;

  cursor: default;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    height: 340px;
  }
`;

const ContentList = styled.ul`
  max-width: 425px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  padding: 4.25rem 1.5rem 2.188rem;
  gap: 4.25rem;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 860px;

    padding: 4.25rem 2.5rem;
    flex-direction: row;
    gap: 0.625rem;
  }
`;

export {
  StyledNavbar,
  AnchorFlex,
  LogoContainer,
  MobileFlex,
  MenuButton,
  NavbarView,
  Line,
  MobileContent,
  ContentList,
  ContentWrapper,
};
