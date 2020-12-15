import React, { useEffect, useRef } from 'react';
import './Box.css'

const Box = (props) => {
    const thisDiv = useRef()
    const boxDisplay = props.display || 'displayH'

    useEffect(() => {
        console.log("Box", props, "width:", thisDiv.current.offsetWidth)
        props.height ? 
            thisDiv.current.style.height = (props.height + "px")
            : thisDiv.current.style.height = "100px"
    }, [ props ])

    return ( 
        <div className={'box ' + boxDisplay} ref={thisDiv}>{props.children}</div>
     );
}
 
export default Box;