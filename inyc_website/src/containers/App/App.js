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
import TestQuery from "../../components/experiments/01-TestQuery/TestQuery";
import FormManager from "../../components/experiments/02-FormManager/FormManager";
import FM2 from "../../components/experiments/03-ExtendsComponent/FormManager";
import FM3 from "../../components/experiments/04-HOC/FormManager";
import SocketIO from "../../components/experiments/05-SocketIO/SocketIO";
import { SocketContext, socket } from "../../components/SocketIO/SocketProvider";

const App = (props) => {

  let history = useHistory()
  const location = useLocation()
  console.log('[App] location', location);

  const [ state, setState ] = useState({
    navIndex: 0
  })

  const navItems = []

  navItems.push({name: "Home", path:"/"})
  // navItems.push({name: "Form Manager", path:"/formManager"})
  // navItems.push({name: "FM2-Extends", path:"/fm2"})
  // navItems.push({name: "FM3-HOC", path:"/fm3"})
  navItems.push({name: "Test Query (requires postgres)", path:"/testQuery"})
  navItems.push({name: "Socket IO", path:"/socketio"})

  useEffect(() => {
    console.log('[App] useEffect', state, location)
  })

  const handleNav = (index) => {
    console.log('[App] handleNav force', index)
    setState({...state, navIndex: index})
    history.push(navItems[index].path)
  }

  return ( 
    <SocketContext.Provider value={socket}>
      <div className="app">
        <Header navItems={navItems} handleNav={handleNav} />

        <Switch>
          <Route path="/socketio">
            <SocketIO />
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
          <Route path="/formManager">
            <FormManager />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
    </SocketContext.Provider>
  );
}
 
export default App;