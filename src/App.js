import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
