import React, { Component } from 'react';

export class Header extends Component {
    render() {
        console.log(this.props);
        // this.props.data="hello react";
        return (
         <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"blue",color:"#fff"}}>
         <a href="/" className="navbar-brand" style= {{color:"#fff"}}>
      {this.props.title}
  </a>  
</nav>
 );
    }
}

export default Header
