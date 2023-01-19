import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Register />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
