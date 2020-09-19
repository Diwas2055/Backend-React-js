import React, { Component } from 'react'

export class Footer extends Component {
    constructor(){
        super();
        this.state={
            name :" ",
            phone:" ",
            email: " ",
            error: {}
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        const {name,phone,email}=this.state
        if (name === " "){
            return this.setState({error:{name: "Please Enter your name"}});
        }
        else if(email === " "){
            return this.setState({error:{email: "Please Enter your email address"}});
        }
        else if (phone === " "){
            return this.setState({error:{phone: "Please Enter your phone"}});
    };
    this.props.formData(this.state);  
    this.setState({error:{},name:'',email:'',phone:''});
    };
    render() {
        const{error}=this.state
        return (
            <div className="container mt-5">
                <div className="card w-50  mx-auto">
                    <div className="card-header" style={{backgroundColor:"blue",
                    color:"#fff"}}>
                        <h3>Contact Form</h3>
                    </div>
                    <div className="card-body">
                    <form action="" onSubmit={this.handleSubmit}>
                    <div className="from-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        onChange={this.handleChange}
                        value={this.state.name}
                        name="name"
                        placeholder="Name" 
                        className="form-control" 
                        />
                    <span style={{color:'red'}}>{error.name}</span>
                    </div>
                    <div className="from-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                         onChange={this.handleChange}
                         value={this.state.email}
                         name="email"
                         placeholder="Email"
                         className="form-control" />
                  <span style={{color:'red'}}>{error.email}</span>
                    </div>
                    <div className="from-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text"
                         onChange={this.handleChange}
                         value={this.state.phone}
                         name="phone"
                         placeholder="Phone" 
                        className="form-control" />
                   <span style={{color:'red'}}>{error.phone}</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer
