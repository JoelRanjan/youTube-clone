import Body from "./compnents/Body";
import Header from "./compnents/Header";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./compnents/MainContainer";
import WatchPage from "./compnents/watchPage";
import WatchListPage from "./compnents/WatchListPage";

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
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
