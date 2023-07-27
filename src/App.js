import { Provider } from "react-redux";
import UserRegistration from "./components/UserRegistration";
import Error from "./components/Error";
import store from "./utils/store";
import UserDataContainer from "./components/UserDataContainer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <UserRegistration />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/user-container",
        element: <UserDataContainer />,
      },
    ],
  },
]);

export default AppRouter;
