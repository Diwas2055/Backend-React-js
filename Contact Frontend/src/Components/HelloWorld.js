import React, { Component } from 'react'

// function HelloWorld(props){
//     return(
//     <h1> Hello Everyone {props.name}</h1>
//     );
// }
class HelloWorld extends Component{
    render(){
        return(
            <div>
                <h1> Hello Everyone {this.props.name}</h1>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                 </ul>
            </div>

        );
    }
}

export default HelloWorld;