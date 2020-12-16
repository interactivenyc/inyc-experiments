import React, { useContext } from 'react';
import { WindowContext } from './WindowManager';

const WindowNavBtn = (props) => {
    const handleClick = useContext(WindowContext)
    console.log('[WindowNavBtn] handleClick', handleClick);
    
    return ( 
        <button onClick={() => handleClick(props.direction)}>{props.direction}</button>
     );
}
 
export default WindowNavBtn;