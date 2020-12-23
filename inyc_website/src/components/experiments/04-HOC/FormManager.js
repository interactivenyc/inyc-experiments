import React, { Component } from 'react';
import WindowElement from './WindowElement';
import windowManager from './WindowManager';
import './WindowManager.css'

class FormManager extends Component {
    constructor(props) {
        console.log('[FormManager] constructor');
        super(props);

        this.state = { 
            firstname: 'first',
            lastname: ''
        }
        
        this.onChange = this.onChange.bind(this);
        this.testWMState = this.testWMState.bind(this);
    }


    onChange(event) {
        console.log("onChange");
        switch (event.target.name) {
            case 'firstname':
                this.setState({
                    firstname: event.target.value
                })
                break
            case 'lastname':
                this.setState({
                    lastname: event.target.value
                })
                break
            default:
        }
    }

    testWMState(){
        // super.goNext();
        console.log('[FormManager] testWMState this.props.passedState', this.props.passedState);
    }

    render() { 
        console.log('[FormManager] render');

        return ( 
            <div className='flex-h'>
                <WindowElement height="200">
                    <h1>Box One</h1>
                    <div className='flex-h'>
                        <input type="text" 
                            onChange={this.onChange} 
                            name="firstname" 
                            value={this.state.firstname}
                            placeholder="firstname"/>
                        <input type="text" 
                            onChange={this.onChange} 
                            name="lastname" 
                            value={this.state.lastname}
                            placeholder="lastname"/>
                    </div>
                    
                    <button onClick={this.props.goNext} >NEXT</button>
                    <button onClick={this.props.inspectDOM} >WM inspect</button>
                    <button onClick={this.testWMState} >WM state</button>
                    {/* <WindowNavBtn direction="next"/>  */}
                </WindowElement>
                <WindowElement height="100">
                    <h1>Box Two</h1>
                    <div className='flex-h'>
                        <input type="text" 
                            onChange={this.onChange} 
                            name="firstname" 
                            value={this.state.firstname}
                            placeholder="firstname"/>
                        <input type="text" 
                            onChange={this.onChange} 
                            name="lastname" 
                            value={this.state.lastname}
                            placeholder="lastname"/>
                    </div>
                    
                    <button onClick={this.props.goPrev} >PREV</button>
                    <button onClick={this.props.goNext} >NEXT</button>
                    {/* <WindowNavBtn direction="next"/>  */}
                </WindowElement>
                <WindowElement height="200">
                    <h1>Box Three</h1>
                    <div className='flex-h'>
                        <input type="text" 
                            onChange={this.onChange} 
                            name="firstname" 
                            value={this.state.firstname}
                            placeholder="firstname"/>
                        <input type="text" 
                            onChange={this.onChange} 
                            name="lastname" 
                            value={this.state.lastname}
                            placeholder="lastname"/>
                    </div>
                    
                    <button onClick={this.props.goPrev} >PREV</button>
                    <button onClick={this.props.goNext} >NEXT</button>
                    {/* <WindowNavBtn direction="next"/>  */}
                </WindowElement>
            </div>
         );
    }
}
 
export default windowManager(FormManager, { selectData: "passing in this data as a test"});