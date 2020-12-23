import React, { Component, createRef } from 'react';

class WindowManager extends Component {
    constructor(props) {
        console.log("[WindowManager] constructor", props);

        super(props);
        this.state = { 
            windowFrame: createRef(),
            windowTransport: createRef()
         }

         this.goNext = this.goNext.bind(this);
         this.getState = this.getState.bind(this);

    }

    goNext(){
        console.log('[WindowManager] goNext', this.state);
    }

    getState(){
        console.log('[WindowManager] getState', this.state);
        return this.state
    }

    // THIS RENDER IS OVERRIDDEN BY FORM MANAGER
    render() { 
        console.log("[WindowManager] render");
        return ( 
            <div className='window-frame' ref={this.windowFrame}>
                <div className='windows' ref={this.windowTransport}>
                    {this.props.children.map((child, index) => {

                        console.log("[WindowManager] child", child);

                        return {child}

                        // this.windowHeights.push(child.props.height)
                        // return <div key={index} ref={this.windowArray[index]} className='window'>{child}</div>
                    })}
                </div>
            </div>
         );
    }
}
 
export default WindowManager;