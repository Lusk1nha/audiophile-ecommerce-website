import styled from "styled-components";
import { RawButton } from "../../styles/reusables-styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StyledNewProductHighlight = styled.div`
  width: 100%;
  height: 510px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.438rem;

  position: relative;

  @media (min-width: ${(props) => props.theme.sizes.desktop}) {
    justify-content: center;
    align-items: flex-start;
  }
`;

const BackgroundImage = styled(LazyLoadImage)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
  position: absolute;

  z-index: 0;
`;

const Title = styled.h5`
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;

  margin-bottom: 1rem;

  opacity: 0.4964;

  z-index: 1;

  @media (min-width: ${(props) => props.theme.sizes.desktop}) {
    margin-bottom: 1.5rem;
  }
`;

const Name = styled.h2`
  max-width: 328px;

  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1.286px;
  text-transform: uppercase;

  margin-bottom: 1.5rem;

  z-index: 1;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 396px;
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
  }
`;

const Description = styled.p`
  max-width: 330px;

  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;

  margin-bottom: 1.75rem;

  opacity: 0.75;

  z-index: 1;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 350px;
    margin-bottom: 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.sizes.desktop}) {
    text-align: left;
  }
`;

const SeeProductButton = styled(RawButton)`
  width: 160px;

  background: #d87d4a;

  align-items: center;
  justify-content: center;

  color: #fff;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;

  padding: 1rem;
  z-index: 1;

  &:hover {
    background: #fbaf85;
  }
`;

export {
  StyledNewProductHighlight,
  BackgroundImage,
  Title,
  Name,
  Description,
  SeeProductButton,
};
