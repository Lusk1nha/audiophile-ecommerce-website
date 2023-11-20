import { RouterProvider, createHashRouter } from "react-router-dom";
import { Layout } from "../../pages/Layout/Layout";
import { Home } from "../../pages/Home/Home";

function Router() {
  const routerMap = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routerMap} />;
}

export { Router };
