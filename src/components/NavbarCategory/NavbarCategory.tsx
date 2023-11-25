import { LeftArrowIcon } from "../Icons/LeftArrowIcon";
import {
  BlurryImage,
  CategoryImage,
  CategoryTitle,
  ShopButton,
  StyledNavbarCategory,
} from "./styles";

interface INavbarCategoryProps {
  title: string;
  image?: string;
}

function NavbarCategory({ title, image }: INavbarCategoryProps) {
  return (
    <StyledNavbarCategory title={title}>
      <CategoryImage
        effect="blur"
        src={image}
        height={90}
        title={`${title} product image`}
      />

      <BlurryImage />

      <CategoryTitle>{title}</CategoryTitle>
      <ShopButton>
        Shop
        <LeftArrowIcon />
      </ShopButton>
    </StyledNavbarCategory>
  );
}

export { NavbarCategory };
