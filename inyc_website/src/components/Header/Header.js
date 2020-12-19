import React from 'react'
// import { Link } from 'react-router-dom'
import './Header.css'

const Header = props => {
  // console.log('[Header] props', props)

  const handleSelect = (event) => {
    console.log('[Header] handleSelect', event.target.name, event.target.value);
    props.handleNav(event.target.value-1)
  }

  return (
    <div className='header'>
      <h1>Interactive NYC</h1>
      
      {/* <Link to="/">[ Home | </Link>
      <Link to="/formManager">FormManager | </Link>
      <Link to="/testQuery">TestQuery ]</Link> */}

      <select name="experiment" onChange={handleSelect}>
        <option value="0"> Select Experiment </option>
        {props.navItems.map((item, index) => {
          return(
            <option key={index} value={index+1}>{item}</option>
          )
        })}
      </select>
      
    </div>
  )
}

export default Header
