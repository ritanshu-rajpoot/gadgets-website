import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Gallery from "./pages/Gallery/Gallery";
import News from "./pages/News/News";
function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Switch>
              <Route exact path="/about" component={AboutUs}/>
              <Route exact path="/contact" component={ContactUs}/>
              <Route exact path="/news" component={News}/>
              <Route exact path="/gallery" component={Gallery}/>
              <Route exact path="/" component={Home}/>
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
