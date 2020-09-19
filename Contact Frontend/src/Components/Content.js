import React, { Component } from 'react'

export class Content extends Component {
    constructor(props){
        super(props);
        this.state ={
            isShowing:false,
            isEdit:false,
            name :this.props.contact.name,
            phone:this.props.contact.phone,
            email: this.props.contact.email,
            error: {}
        };
    }
    handleShowHide =() =>{
        // this.state.isShowing = true;
        this.setState({isShowing:!this.state.isShowing});
    };
    handleDelete=() =>{
        this.props.delete(this.props.contact._id);
    };
    handleEdit=()=>{
        this.setState({isEdit:true});
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
    let editedData={
        name,email,phone,
        id:this.props.contact._id
    }
    this.props.edit(editedData);
    this.setState({error:{},isEdit:false});
    };
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    };
    
    componentWillUnmount(){
        console.log('ComponentWill Unmount ');
      }

    render() {
        let cls=this.state.isShowing ? 
        "fas fa-arrow-circle-up  mt-2 mr-3"
        : "fas fa-arrow-circle-down  mt-2 mr-3";
        const{error}=this.state;
        if (this.state.isEdit){
            return(
                <div className="container mt-5">
                <div className="card w-50  mx-auto">
                    <div className="card-header" style={{backgroundColor:"blue",
                    color:"#fff"}}>
                        <h3>Edit  Form</h3>
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
                    <button type="submit" className="btn btn-primary btn-block mt-4">Edit</button>
                </form>
                    </div>
                </div>
            </div>
            )
        } else {
            return (
                <div>
                     <div className="card w-50 mt-5 mx-auto">
                         <div className="card-header" style={{backgroundColor:"blue",
                        color:"#fff",fontWeight:"bold"}}>
                             <h4>
                             <i className={cls} onClick={this.handleShowHide}></i>
                                 {this.props.contact.name}
                                <div className="float-right mt-2" >
                                 <i className="fas fa-trash mr-3" onClick={this.handleDelete}></i>
                                 <i className="fas fa-edit" onClick={this.handleEdit}></i>
                                 </div>
                                 </h4>
                             
                         </div>
                        {this.state.isShowing ? ( <div className="card-body">
                             <ul className="lst-group">
                                  <li className="list-group-item">{this.props.contact.email}</li>
                                  <li className="list-group-item">{this.props.contact.phone}</li>
                             </ul>
                         </div>):null}
                     </div>                
                </div>
            );

        }
        
    }
}

export default Content;
