import React /*, {Component} */from 'react';
//import { render } from 'react-dom';
import './Hello.css';
/*
class declaration 
class Hello extends Component {
    render() {
        return( 
         <div>
              <h1 className="f1">Hello world</h1>
              <p >{this.props.greeting}</p>
              </div>);
    }
}

function implementation
*/
const Hello =(props)=>{
    return( 
         <div>
              <h1 className="f1">Hello world</h1>
              <p >{/* change this.props.greeting to */ props.greeting }</p>
              
              </div>);
}

export default Hello;