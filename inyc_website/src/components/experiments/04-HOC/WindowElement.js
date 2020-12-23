import React, { useRef, useEffect } from 'react';

const WindowElement = (props) => {
    const thisDiv = useRef()

    useEffect(() => {
        // console.log("Box", props, "width:", thisDiv.current.offsetWidth)
        props.height ? 
            thisDiv.current.style.height = (props.height + "px")
            : thisDiv.current.style.height = "100px"
    }, [ props ])

    return ( 
        <div className='window-element box' ref={thisDiv}>{props.children}</div>
     );
}
 
export default WindowElement;