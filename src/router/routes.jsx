import { createBrowserRouter } from "react-router-dom";
import { Data } from "../components/Data";
import { Forecast } from "../components/Forecast";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Data />,
  },
  {
    path: "/forecast",
    element: <Forecast />,
  },
]);
