import { LeftArrowIcon } from "../Icons/LeftArrowIcon";
import {
  BlurryImage,
  CategoryImage,
  CategoryTitle,
  ShopButton,
  StyledCategoryAnchor,
} from "./styles";

interface ICategoryAnchorProps {
  title: string;
  image?: string;
}

function CategoryAnchor({ title, image }: ICategoryAnchorProps) {
  return (
    <StyledCategoryAnchor title={title}>
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
    </StyledCategoryAnchor>
  );
}

export { CategoryAnchor };
