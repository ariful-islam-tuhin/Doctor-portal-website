import { Route, Switch } from "react-router";
import "./App.css";
import Navigation from "./compunents/Navigation/Navigation";
import Home from "./compunents/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

import Appointment from "./compunents/Appointment/Appointment";
import Login from "./compunents/Login/Login";

import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Register from "./compunents/Login/Register/Register";
import PrivateRoute from "./compunents/Login/PrivetRoute/PrivetRoute";
import Dashboard from "./compunents/Dashboard/Dashboard";
import Footer from "./compunents/Home/Footer/Footer";


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route  path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute  path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path='/register'>
              <Register> </Register>                   
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>                 
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
