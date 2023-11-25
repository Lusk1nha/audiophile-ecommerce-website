import { CategoryAnchor } from "../../components/CategoryAnchor/CategoryAnchor";
import { Navbar } from "../../components/Navbar/Navbar";
import { NewProductHighlight } from "../../components/NewProductHighlight/NewProductHighlight";
import { Wrapper } from "../../styles/reusables-styles";
import { ContentList, StartHomeWrapper, StyledHome } from "./styles";

function Home() {
  return (
    <StyledHome>
      <StartHomeWrapper $alignItems="center">
        <Wrapper $maxWidth={"1110px"}>
          <Navbar isTranslucid />
          <NewProductHighlight />
        </Wrapper>
      </StartHomeWrapper>

      <ContentList>
        <CategoryAnchor
          title="Headphones"
          image="assets\product-xx99-mark-one-headphones\mobile\image-category-page-no-bg-preview.png"
        />

        <CategoryAnchor
          title="Speakers"
          image="assets\product-zx9-speaker\mobile\image-category-page-no-bg-preview.png"
        />

        <CategoryAnchor
          title="Earphones"
          image="assets\product-yx1-earphones\mobile\image-category-page-no-bg-preview.png"
        />
      </ContentList>
    </StyledHome>
  );
}

export { Home };
