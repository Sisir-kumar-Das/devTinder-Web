import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body.jsx";
import Profile from "./Components/Profile.jsx";
import Login from "./Components/Login.jsx";
import Feed from "./Components/Feed.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
