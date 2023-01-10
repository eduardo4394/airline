import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ConfirmPage from "../pages/ConfirmPage";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/confirm",
        element: <ConfirmPage />,
      },
    ],
  },
]);
