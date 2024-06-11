import Body from "./compnents/Body";
import Header from "./compnents/Header";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./compnents/MainContainer";
import WatchPage from "./compnents/watchPage";
import WatchListPage from "./compnents/WatchListPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { oauthClientId } from "./utils/constants";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "watchList",
          element: <WatchListPage />,
        },
      ],
    },
  ]);

  return (
    <GoogleOAuthProvider clientId={oauthClientId}>
      <Provider store={store}>
        <div>
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
