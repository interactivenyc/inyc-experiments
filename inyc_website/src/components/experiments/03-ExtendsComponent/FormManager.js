import React from 'react';
import Box from '../../Box/Box';
import './FormManager.css';
// import WindowContextProvider, { WindowContext } from './WindowContext';
import WindowManager from './WindowManager';
// import WindowNavBtn from './WindowNavBtn';

class FormManager extends WindowManager {
    constructor(props) {
        console.log('[FormManager] constructor');
        super(props);
        this.state = { 
            firstname: 'first',
            lastname: ''
         }

        

         this.goNext = this.goNext.bind(this);
         this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        console.log('[FormManager] componentDidMount state', this.state, super.getState());
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

    goNext(){
        super.goNext();
        console.log('[FormManager] goNext');
    }

    render() { 
        return ( 
            <div className='form-manager'>
            <h1>Form Windows (to animate)</h1>

                <Box height="200">
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
                    
                    <button onClick={this.goNext} >NEXT</button>
                    {/* <WindowNavBtn direction="next"/>  */}
                </Box>

                <Box height="200">
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
                    
                    <button onClick={this.goNext} >NEXT</button>
                    {/* <WindowNavBtn direction="next"/>  */}
                </Box>
                
                
            </div>
         );
    }
}
 
export default FormManager;

// const FormManager = () => {
//     const thisRef = useRef()

//     const [ state, setState ] = useState({
        // firstname: 'first',
        // lastname: ''
//     })

//     useEffect(() => {
//         console.log("[FormManager] width/state:", thisRef.current.offsetWidth, state)
//     })

//     const onChange = (event) => {
//         console.log('onChange', event.target.value);
//         switch (event.target.name) {
//             case 'firstname':
//                 setState({...state, firstname: event.target.value})
//                 break
//             case 'lastname':
//                 setState({...state, lastname: event.target.value})
//                 break
//             default:
//         }        
//     }

//     return ( 
        // <div className='form-manager' ref={thisRef}>
        //     <h1>Form Windows (to animate)</h1>
        //     <WindowManager>
        //         <Box height="200">
        //             <h1>Box One</h1>
        //             <div className='flex-h'>
        //                 <input type="text" 
        //                     onChange={onChange} 
        //                     name="firstname" 
        //                     value={state.firstname}
        //                     placeholder="firstname"/>
        //                 <input type="text" 
        //                     onChange={onChange} 
        //                     name="lastname" 
        //                     value={state.lastname}
        //                     placeholder="lastname"/>
        //             </div>
                    
        //             <WindowNavBtn direction="next"/> 
        //         </Box>
        //         <Box height="150">
        //             <h1>Box Two</h1>
        //             <div className='flex-h'>
        //                 <input type="text" 
        //                     onChange={onChange} 
        //                     name="firstname" 
        //                     value={state.firstname}
        //                     placeholder="firstname"/>
        //                 <input type="text" 
        //                     onChange={onChange} 
        //                     name="lastname" 
        //                     value={state.lastname}
        //                     placeholder="lastname"/>
        //             </div>
        //             <WindowNavBtn direction="prev"/> 
        //             <WindowNavBtn direction="next"/> 
        //         </Box>
        //         <Box height="200">
        //             <h1>Box Three</h1>
        //             <div className='flex-h'>
        //                 <input type="text" 
        //                     onChange={onChange} 
        //                     name="firstname" 
        //                     value={state.firstname}
        //                     placeholder="firstname"/>
        //                 <input type="text" 
        //                     onChange={onChange} 
        //                     name="lastname" 
        //                     value={state.lastname}
        //                     placeholder="lastname"/>
        //             </div>
        //             <WindowNavBtn direction="prev"/> 
        //         </Box>
                
        //     </WindowManager>
        // </div>
//      );
// }
 
// export default FormManager;