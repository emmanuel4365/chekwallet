import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Dashboard,
  DashboardLandingPage,
  HomePage,
  RegisterPage,
  LoginPage,
} from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <DashboardLandingPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
