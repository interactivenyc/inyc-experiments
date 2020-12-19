// This function takes a component...
import React, { Component, createRef } from 'react';
import './WindowManager.css'

function windowManager(WrappedComponent, selectData) {
    // ...and returns another component...
    return class extends Component {
        constructor(props) {
            console.log('[WindowManager] constructor', selectData);
            super(props);

            this.state = {
                currentIndex: 0,
                windowFrame: createRef(),
                windowTransport: createRef(),
                windowArray: []
            };

            // THESE DON'T WORK ANYWHERE [???] -- storing these in state, instead... #:-{}
            // const windowFrame = createRef()
            // const windowTransport = createRef()

            this.goNext = this.goNext.bind(this);
            this.goPrev = this.goPrev.bind(this);
            this.reset = this.reset.bind(this);
            this.getWindowPosition = this.getWindowPosition.bind(this);
            this.inspectDOM = this.inspectDOM.bind(this);
        }

        componentDidMount() {
            // ... that takes care of the subscription...
            // DataSource.addChangeListener(this.handleChange);
            let windowArray = document.getElementsByClassName('window-element')

            console.log('[WM init] windowArray', windowArray);
            
            this.setState({
                windowArray: windowArray
            })
        }

        componentDidUpdate() {
            console.log('[WindowManager] componentDidUpdate', this.state);
            this.updateWindowPosition()
        }

        componentWillUnmount() {
            // DataSource.removeChangeListener(this.handleChange);
        }

        goNext() {
            console.log('[WindowManager] goNext');
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
            
        }

        goPrev() {
            console.log('[WindowManager] goPrev');
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
        }

        reset() {
            console.log('[WindowManager] reset');
            this.setState({
                currentIndex: 0
            })
        }

        updateWindowPosition() {
            // set horizontal scroll pos
            let wt = this.state.windowTransport.current
            wt.style['margin-left'] = this.getWindowPosition() + 'px'

            // set window height
            let wf = this.state.windowFrame.current
            let newHeight = this.state.windowArray[this.state.currentIndex].offsetHeight + 'px'
            wf.style.height = newHeight
        }

        getWindowPosition() {
            let result = 0;
            if (this.state.currentIndex > 0){
                for (let x = 0; x < this.state.currentIndex; x++){
                    result -= this.state.windowArray[x].offsetWidth
                }
            }
            return result;
        }

        inspectDOM() {
            console.log("[WM inspect] windowArray", this.state.windowArray);

            for (let index = 0; index < this.state.windowArray.length; index++) {
                console.log("[WM inspect] height", this.state.windowArray[index].offsetHeight);
            }
        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            console.log('[WindowManager] render');

            return (
                <div className='window-frame' ref={this.state.windowFrame}>
                    <div className='windows' ref={this.state.windowTransport}>
                        <WrappedComponent 
                            goNext={this.goNext} 
                            goPrev={this.goPrev} 
                            reset={this.reset} 
                            inspectDOM={this.inspectDOM} 
                        />
                    </div>
                </div>
            );
        }
    };
}

export default windowManager