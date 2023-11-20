import { Navbar } from "../../components/Navbar/Navbar";
import { StyledHome } from "./styles";

function Home() {
  return (
    <StyledHome>
      <Navbar />
      <div>Home</div>
    </StyledHome>
  );
}

export { Home };
