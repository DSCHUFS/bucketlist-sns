import { Route, Switch } from "react-router";
import MainPage from "./page/MainPage";
import SignupPage from "./page/SignupPage";
import SigninPage from "./page/SigninPage";
import ProfilePage from "./page/ProfilePage";
import NotFound from "./page/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/signin" component={SigninPage} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
