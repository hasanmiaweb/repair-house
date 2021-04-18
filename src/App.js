import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import MainApp from "./Components/MainApp";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/">
            <MainApp />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
