import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import './App.css';

import {
  Switch,
  Route,
  // Link,
  useLocation,
  useHistory
} from "react-router-dom";

import Home from "../../components/Home/Home";
import FormManager from "../../components/experiments/02-FormManager/FormManager";
import FM2 from "../../components/experiments/03-ExtendsComponent/FormManager";
import FM3 from "../../components/experiments/04-HOC/FormManager";
import TestQuery from "../../components/experiments/01-TestQuery/TestQuery";

const App = (props) => {

  let history = useHistory()

  const [ state, setState ] = useState({
    navIndex: 0
  })

  const location = useLocation()
  console.log('[App] location', location);

  const navItems = ["Home", "Form Manager", "FM2-Extends", "FM3-HOC", "Test Query (requires postgres)"]
  const navPaths = ["/", "/formManager", "/fm2", "/fm3", "/testQuery"]

  useEffect(() => {
    console.log('[App] useEffect', state, location)
  })

  const handleNav = (index) => {
    console.log('[App] handleNav force', index)
    setState({...state, navIndex: index})
    history.push(navPaths[index])
  }

  return ( 
      <div className="app">
        <Header navItems={navItems} handleNav={handleNav} />

        <Switch>
          <Route path="/formManager">
            <FormManager />
          </Route>
          <Route path="/fm2">
            <FM2 />
          </Route>
          <Route path="/fm3">
            <FM3 />
          </Route>
          <Route path="/testQuery">
            <TestQuery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
  );
}
 
export default App;

