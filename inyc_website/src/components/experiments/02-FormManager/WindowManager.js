import React, { createContext, createRef, useEffect, useState } from 'react';
import './WindowManager.css';

export const WindowContext = createContext()

const WindowManager = (props) => {
    console.log('[WindowManager] children', props.children);
    const [ currentIndex, setCurrentIndex] = useState(0)
    let childrenArray = []
    let windows = createRef()

    React.Children.map(props.children, (child) => {
        // console.log("child", child);
        childrenArray.push(createRef())
    })

    useEffect(() => {
        console.log('[WindowManager] useEffect show', currentIndex, 'pos', childrenArray[currentIndex].current);
        let newPos = (-400 * (currentIndex)) + "px"
        windows.current.style['margin-left'] = newPos
    })

    const handleClick = (direction) => {
        console.log("[WindowManager] handleClick", direction);
        if (direction === "next") {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return ( 
        <WindowContext.Provider value={handleClick}>
            <div className='window-frame'>
                <div className='windows' ref={windows}>
                    {props.children.map((child, index) => {
                        return <div key={index} ref={childrenArray[index]} className='window'>{child}</div>
                    })}
                </div>
            </div>
        </WindowContext.Provider>
     );
}
 
export default WindowManager;