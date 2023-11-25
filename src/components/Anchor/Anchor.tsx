import { ListWrapper, StyledAnchor } from "./styles";

interface IAnchorProps {
  text: string;
  url: string;
}

function Anchor({ text, url }: IAnchorProps) {
  return (
    <ListWrapper>
      <StyledAnchor href={url}>{text}</StyledAnchor>
    </ListWrapper>
  );
}

export { Anchor };
