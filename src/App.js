import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from './Components/Home/About/About';
import Contact from './Components/Home/Contact/Contact';
import Footer from './Components/Home/Footer/Footer';
import Home from "./Components/Home/Home/Home";
import MainNavbar from './Components/Home/Navbar/MainNavbar';
import Services from './Components/Home/Services/Services';
import Team from './Components/Home/Team/Team';
import Topbar from './Components/Home/Topbar/Topbar';
import Login from './Components/Login/Login';
function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <MainNavbar></MainNavbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/team">
          <Team></Team>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
