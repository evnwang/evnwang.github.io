import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./Components/MainPage";
import GradeCalculator from "./Components/GradeCalculator";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/gradecalculator">
            <GradeCalculator />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;