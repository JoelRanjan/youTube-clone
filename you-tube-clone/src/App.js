import Body from "./compnents/Body";
import Header from "./compnents/Header";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
