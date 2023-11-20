import { useState } from "react";
import { RawButton, Wrapper } from "../../styles/reusables-styles";
import { Anchor } from "../Anchor/Anchor";
import { CartIcon } from "../Icons/CartIcon";
import { LogoIcon } from "../Icons/LogoIcon";
import { MenuIcon } from "../Icons/MenuIcon";
import {
  NavbarView,
  Line,
  StyledNavbar,
  AnchorFlex,
  MenuButton,
  MobileFlex,
  LogoContainer,
  MobileContent,
  ContentList,
  ContentWrapper,
} from "./styles";

import { NavbarCategory } from "../NavbarCategory/NavbarCategory";

interface INavbarProps {
  isTranslucid?: boolean;
}

function Navbar({ isTranslucid }: INavbarProps) {
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);

  return (
    <StyledNavbar $isTranslucid={isTranslucid} className="navbar-container">
      <Wrapper $maxWidth={"1110px"}>
        <NavbarView className="navbar-functions">
          <MobileFlex>
            <MenuButton
              title="Click here to open the Menu"
              onClick={() => setIsContentOpen((prevState) => !prevState)}
            >
              <MenuIcon />
            </MenuButton>

            <LogoContainer title="Logo of AudioPhile">
              <LogoIcon />
            </LogoContainer>
          </MobileFlex>

          <AnchorFlex>
            <Anchor text={"Home"} url={""} />
            <Anchor text={"Headphones"} url={""} />
            <Anchor text={"Speakers"} url={""} />
            <Anchor text={"Earphones"} url={""} />
          </AnchorFlex>

          <RawButton title="Click here to open the cart">
            <CartIcon />
          </RawButton>
        </NavbarView>

        <Line />
      </Wrapper>

      {isContentOpen ? (
        <MobileContent className="mobile-navbar-content">
          <ContentWrapper>
            <ContentList>
              <NavbarCategory
                title="Headphones"
                image="assets\product-xx99-mark-one-headphones\mobile\image-category-page-no-bg-preview.png"
              />

              <NavbarCategory
                title="Speakers"
                image="assets\product-zx9-speaker\mobile\image-category-page-no-bg-preview.png"
              />

              <NavbarCategory
                title="Earphones"
                image="assets\product-yx1-earphones\mobile\image-category-page-no-bg-preview.png"
              />
            </ContentList>
          </ContentWrapper>
        </MobileContent>
      ) : null}
    </StyledNavbar>
  );
}

export { Navbar };
