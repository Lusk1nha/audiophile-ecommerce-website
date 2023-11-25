import styled from "styled-components";
import { RawButton } from "../../styles/reusables-styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StyledNavbarCategory = styled.li`
  width: 100%;
  height: 165px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  border-radius: 8px;
  background: #f1f1f1;

  gap: 1rem;
  padding: 1.375rem;

  position: relative;

  cursor: pointer;
`;

const CategoryImage = styled(LazyLoadImage)`
  bottom: 75%;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
  position: absolute;

  z-index: 5;
`;

const BlurryImage = styled.div`
  background: black;

  width: 95px;
  height: 15px;

  position: absolute;
  margin-left: auto;
  margin-right: auto;

  bottom: 70%;
  left: 0;
  right: 0;
  border-radius: 50%;

  filter: blur(22px);

  z-index: 4;
`;

const CategoryTitle = styled.h3`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.071px;
  text-transform: uppercase;
`;

const ShopButton = styled(RawButton)`
  color: #000;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.5;
`;

export {
  StyledNavbarCategory,
  CategoryTitle,
  BlurryImage,
  CategoryImage,
  ShopButton,
};
