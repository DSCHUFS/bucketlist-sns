import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import MainPage from "./page/MainPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
