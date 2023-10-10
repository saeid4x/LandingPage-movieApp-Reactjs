import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import { Header } from "./components/header/header";
import SinglePage from "./components/watch/SinglePage";
import HomePage from "./home/HomePage";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/singlepage/:id" component={SinglePage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
