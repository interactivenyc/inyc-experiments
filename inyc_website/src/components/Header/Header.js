import React from 'react'
import './Header.css'

const Header = props => {
  console.log('[Header]', props)

  const handleSelect = (event) => {
    console.log('[Header] handleSelect', event.target.name, event.target.value);
    props.handleNav(event.target.value-1)
  }

  return (
    <div className='header'>
      Interactive NYC

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
