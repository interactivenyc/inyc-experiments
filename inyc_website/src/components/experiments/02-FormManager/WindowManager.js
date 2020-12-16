import React, { createContext, createRef, useEffect, useState } from 'react';
import './WindowManager.css';

export const WindowContext = createContext()

const WindowManager = (props) => {
    console.log('[WindowManager] children', props.children);
    const [ currentIndex, setCurrentIndex] = useState(0)
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
    })

    const handleClick = (event) => {
        console.log("[WindowManager] handleClick", event.target.name);
        if (event.target.name === "btn-next") {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return ( 
        <WindowContext.Provider value={{ handleClick }}>
            <div className='window-frame' ref={windowFrame}>
                {props.children.map((child, index) => {
                    return (index === currentIndex) ?
                        <div key={index} ref={childrenArray[index]} className='window'>{child}</div>
                    : 
                        <div key={index} ref={childrenArray[index]} style={{display: 'none'}}>{child}</div>
                })}
            </div>
        </WindowContext.Provider>
     );
}
 
export default WindowManager;