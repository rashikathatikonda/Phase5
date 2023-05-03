import './App.css';
import Navbar from  './Components/Home2';
import Home from './Components/Home';
import AllUsers from './Components/AllEvents';
import AddUser from './Components/AddEvent';
import EditUser from './Components/EditEvents';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/all" component={AllEvents} exact />
        <Route path="/add" component={AddEvent} exact />
        <Route path="/edit/:id" component={EditEvent}exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
