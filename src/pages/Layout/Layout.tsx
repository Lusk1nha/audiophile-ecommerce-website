import { Outlet } from "react-router-dom";
import { StyledLayout } from "./styles";

function Layout() {
  return (
    <StyledLayout className="layout-container">
      <Outlet />
    </StyledLayout>
  );
}

export { Layout };
