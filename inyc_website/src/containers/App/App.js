import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  useLocation
} from "react-router-dom";

import Home from "../../components/Home/Home";
import FormManager from "../../components/experiments/02-FormManager/FormManager";
import TestQuery from "../../components/experiments/01-TestQuery/TestQuery";

const App = (props) => {

  const [ state, setState ] = useState({
    navIndex: 0
  })

  const location = useLocation()
  console.log('[App] location', location);

  const navItems = ["Home", "Form Manager", "Test Query (requires postgres)"]
  // const navPaths = ["/", "/formManager", "/testQuery"]

  useEffect(() => {
    console.log('[App] useEffect', props)
  })

  const handleNav = (index) => {
    console.log('[App] handleNav', index)
    setState({...state, navIndex: index})
  }

  return ( 
    <Router>
      <div className="app">
        <Header navItems={navItems} handleNav={handleNav} />

        <Switch>
          <Route path="/formManager">
            <FormManager />
          </Route>
          <Route path="/testQuery">
            <TestQuery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}
 
export default App;

