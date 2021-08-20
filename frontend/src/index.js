import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./navigation";
import { CookiesProvider } from "react-cookie";

function App() {
  // const [{ user }] = useCookies();
  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //     if (user) {
  //         dispatch(setUser(user));
  //     }
  // }, [user, dispatch]);

  return <Navigation />;
}

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
