import {
  Description,
  Name,
  SeeProductButton,
  StyledNewProductHighlight,
  Title,
} from "./styles";

function NewProductHighlight() {
  return (
    <StyledNewProductHighlight>
      <Title>New Product</Title>
      <Name>XX99 Mark II HeadphoneS</Name>
      <Description>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Description>

      <SeeProductButton>See Product</SeeProductButton>
    </StyledNewProductHighlight>
  );
}

export { NewProductHighlight };
