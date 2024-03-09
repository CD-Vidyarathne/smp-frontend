import ThemeController from "./components/ThemeController.tsx";
import LoginPage from "./components/LoginPage.tsx";
import SignupPage from "./components/SignupPage.tsx";
import ProfileRedirector from "./components/ProfileRedirector.tsx";
import Profile from "./components/Profile.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/profile" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/profile",
    element: <ProfileRedirector></ProfileRedirector>,
  },
  {
    path: "/profile/:userId",
    element: <Profile />,
  },
]);

function App() {
  return (
    <>
      <ThemeController />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
