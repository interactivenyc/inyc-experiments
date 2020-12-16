import React, { useState, useEffect, useRef } from 'react';
import Box from '../../Box/Box';
import './FormManager.css';
import WindowManager from './WindowManager';

const FormManager = () => {
    const thisRef = useRef()

    const [ state, setState ] = useState({
        firstname: '',
        lastname: ''
    })

    useEffect(() => {
        console.log("[FormManager] width/state:", thisRef.current.offsetWidth, state)
    })

    const onChange = (event) => {
        console.log('onChange', event.target.value);
        switch (event.target.name) {
            case 'firstname':
                setState({...state, firstname: event.target.value})
                break
            case 'lastname':
                setState({...state, lastname: event.target.value})
                break
                default:
        }
       
        
    }

    const handleClick = (event) => {
        console.log('handleClick', event.target.name);
    }

    return ( 
        <div className='form-manager' ref={thisRef}>
            <h1>Form Windows (to animate)</h1>
            <WindowManager>
                <Box height="200">
                    <input type="text" 
                        onChange={onChange} 
                        name="firstname" 
                        placeholder="firstname"/>
                    <input type="text" 
                        onChange={onChange} 
                        name="lastname" 
                        placeholder="lastname"/>
                    <button className="btn-next" name="btn-name" onClick={handleClick}>next</button>
                </Box>
                <Box>Box Two</Box>
                <Box>Box Three</Box>
            </WindowManager>
        </div>
     );
}
 
export default FormManager;