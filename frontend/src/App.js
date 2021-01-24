import { Route, Switch } from "react-router";
import MainPage from "./page/MainPage";
import SignupPage from "./page/SignupPage";
import SigninPage from "./page/SigninPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/signin" component={SigninPage} />
      </Switch>
    </div>
  );
}

export default App;
