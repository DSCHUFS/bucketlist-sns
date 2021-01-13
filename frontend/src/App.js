import "./App.css";
import { Route, Switch } from "react-router";
import MainPage from "./page/MainPage";
import SignupPage from "./page/SignupPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </div>
  );
}

export default App;
