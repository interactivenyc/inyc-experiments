import React, { createRef, useEffect, useState } from 'react';
import './WindowManager.css';

const WindowManager = (props) => {
    console.log('[WindowManager] children', props.children);
    let currentIndex = 0
    let childrenArray = []
    let windowFrame = createRef()

    React.Children.map(props.children, (child) => {
        // console.log("child", child);
        childrenArray.push(createRef())
    })

    useEffect(() => {
        console.log('[WindowManager] useEffect');
        windowFrame.current.style.width='400px'
        childrenArray[currentIndex].current.classList.add('window-reveal')

        // childrenArray[currentIndex].current.querySelectorAll("button")[0].addEventListener('click', handleClick);
        // return function cleanup() {
        //     childrenArray[currentIndex].current.querySelectorAll("button")[0].removeEventListener('click', handleClick);
        // }
    })

    const handleClick = (event) => {
        console.log("[WindowManager] handleClick");
    }

    return ( 
        <div className='window-frame' ref={windowFrame}>
            {props.children.map((child, index) => {
                return (index === currentIndex) ?
                    <div key={index} ref={childrenArray[index]} className='window'>{child}</div>
                : 
                    <div key={index} ref={childrenArray[index]} style={{display: 'none'}}>{child}</div>
            })}
        </div>
     );
}
 
export default WindowManager;