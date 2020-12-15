import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import './App.css';

import Home from "../../components/Home/Home";
import FormManager from "../../components/experiments/02-FormManager/FormManager";
import TestQuery from "../../components/experiments/01-TestQuery/TestQuery";

const App = () => {
  const [ state, setState ] = useState({
    navIndex: 0,
    navItems: [
      "Home",
      "Form Manager",
      "Test Query (requires postgres)"
    ],
    navComponents: [
      Home,
      FormManager,
      TestQuery
    ]
  })

  useEffect(() => {
    console.log('[App] useEffect')
  })

  const handleNav = (index) => {
    console.log('[App] handleNav', index)
    setState({...state, navIndex: index})
  }

  const renderSwitch = () => {
    switch (state.navIndex) {
      case 0:
        return <Home></Home>
      case 1:
        return <FormManager></FormManager>
      case 2:
        return <TestQuery></TestQuery>
      default:
        break;
    }
  }

  return ( 
    <div className="app">
      <Header navItems={state.navItems} handleNav={handleNav} />
      {renderSwitch()}
      
    </div>
  );
}
 
export default App;

