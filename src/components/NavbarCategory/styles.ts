import styled from "styled-components";
import { RawButton } from "../../styles/reusables-styles";

const StyledNavbarCategory = styled.li`
  width: 100%;
  min-height: 165px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  border-radius: 8px;
  background: #f1f1f1;

  gap: 1rem;
  padding: 1.375rem;

  position: relative;

  transition: transform 200ms linear;

  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }
`;

const CategoryImage = styled.img`
  height: 90px;

  bottom: 70%;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
  position: absolute;
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

export { StyledNavbarCategory, CategoryTitle, CategoryImage, ShopButton };
