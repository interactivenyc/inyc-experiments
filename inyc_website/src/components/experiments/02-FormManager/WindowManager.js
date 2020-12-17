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
        console.log('[WindowManager] useEffect show', currentIndex, 'pos', childrenArray[currentIndex].current.style.left);
        
        let newPos = getCalculatedWidth() + "px"
        // let newPos = (-420 * (currentIndex)) + "px"
        // let newPos = (-childrenArray[currentIndex].current.offsetLeft) + "px"


        for (let child in childrenArray){
            // console.log("child width/height", child.current.offsetWidth, child.current.offsetHeight);

            console.log("child width/height", childrenArray[child].current.offsetWidth, childrenArray[child].current.offsetHeight);
            console.log("child offsetLeft", childrenArray[child].current.offsetLeft);
            console.log("child child", childrenArray[child].current.getBoundingClientRect());

        }
        // let newPos = (childrenArray[currentIndex].current.style.left) + "px"
        
        windows.current.style['margin-left'] = newPos
    })

    const getCalculatedWidth = () => {
        let result = 0;

        if (currentIndex > 0){
            for (let x = 0; x<currentIndex; x++){
                result -= childrenArray[x].current.offsetWidth
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