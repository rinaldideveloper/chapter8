import Navbar from "./Component/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddPlayer from "./Component/AddPlayer";
import EditPlayer from "./Component/EditPlayer";
import ListPlayer from "./Component/ListPlayer";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path='/AddPlayer'>
        <AddPlayer />
        </Route>
      </Switch>
      <Switch>
        <Route path='/EditPlayer'>
          <EditPlayer />
        </Route>
      </Switch>
      <Switch>
        <Route path='/ListPlayer'>
          <ListPlayer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
