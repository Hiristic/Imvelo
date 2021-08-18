import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./navigation";

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
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
