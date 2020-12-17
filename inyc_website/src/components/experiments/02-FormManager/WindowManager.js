import React, { createContext, createRef, useEffect, useState } from 'react';
import './WindowManager.css';

export const WindowContext = createContext()

const WindowManager = (props) => {
    console.log('[WindowManager] children', props.children);
    const [ currentIndex, setCurrentIndex] = useState(0)

    let windowFrame = createRef()
    let windowTransport = createRef()
    let windowArray = []
    // let windowHeights = []

    React.Children.map(props.children, (child) => {
        // console.log("child", child);
        windowArray.push(createRef())
    })

    useEffect(() => {
        console.log('[WindowManager] useEffect show', currentIndex, 'pos', windowArray[currentIndex].current.style.left);
        
        let newPos = getWindowPosition() + "px"
        windowTransport.current.style['margin-left'] = newPos

        // windowFrame.current.style.height = windowHeights[currentIndex] + 'px'
    })

    const getWindowPosition = () => {
        let result = 0;
        if (currentIndex > 0){
            for (let x = 0; x<currentIndex; x++){
                result -= windowArray[x].current.offsetWidth
            }
        }
        return result;
    }

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
            <div className='window-frame' ref={windowFrame}>
                <div className='windows' ref={windowTransport}>
                    {props.children.map((child, index) => {
                        // windowHeights.push(child.props.height)
                        return <div key={index} ref={windowArray[index]} className='window'>{child}</div>
                    })}
                </div>
            </div>
        </WindowContext.Provider>
     );
}
 
export default WindowManager;