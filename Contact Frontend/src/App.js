import React from 'react';
import './App.css';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Axios from 'axios';

class App extends React.Component {
  state={
    contact:[
      // {id:1,name:"ram",phone:98988658,email:"ram@gmail.com"},
      // {id:2,name:"hari",phone:98988758,email:"hari@gmail.com"},
      // {id:3,name:"sita",phone:98988958,email:"sita@gmail.com"}
    ],
  };
  handleDelete=(id)=>{
    // console.log(id);
    
    // let filterData= this.state.contact.filter(function(contact){
    //   return contact.id !== id
    // });  


     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        // this.setState({contact: filterData});
        Axios.delete(`http://localhost:5000/api/v1/contacts/${id}`)
        .then(res=>{
          console.log(res);
          if(res.status=== 200){
            this.getContact();
          }
        }).catch(err=>console.log(err));
        toast.success("Sucessfully Deleted ?");
        Swal.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"  );
      }
    })
    
  };
  handleSumittedData=(formData)=>{
    // let id = this.state.contact.length+1;
  //   let insertData={id:uuidv4(),...formData};
  //   this.setState({contact:[insertData,...this.state.contact]});
  // toast.success('data inserted');

  Axios.post('http://localhost:5000/api/v1/contacts',formData)
  .then(res =>{
    console.log(res);
    if(res.status === 201){
      this.getContact();
    }
  }).catch(err=> console.log(err));

  };

  handleEditData=(editData)=>{
    // console.log(editData);
    // let editContactData = this.state.contact.map(function(contact){
    //   if(editData.id === contact.id){
    //     return editData;
    //   }
    //   return contact;
    // });
    // this.setState({contact : editContactData});

    Axios.put(`http://localhost:5000/api/v1/contacts/${editData.id}`,editData).then(res=>{
      console.log(res);
      if(res.status===200){
        this.getContact();
      }
    }    ).catch(err=>console.log(err));
    toast.success('edit successfully');
  };

  componentDidMount(){
    // console.log('render Called');
    this.getContact();
  }


  // componentDidUpdate(prevProps,prevState){
  //   console.log("ConponentDidUpdate Called");
  //   // if(this.state.contact !== prevState)
  //   // {

  //   // }
  // };


 //Get Data From Database

 getContact=()=>
 {
   //Method
   //Get Method Dtaa Receive
   //Post Method Data Send 
   //Delete Method Data Delete
   //Put Method  Update data

   Axios.get('http://localhost:5000/api/v1/contacts').then((response) => {
     console.log(response.data.data)
    this.setState({contact:response.data.data})
   } ).catch(err => console.log(err));
 }
    render(){    
  return ( 
  <div>     
     <Header title="Contact Management System"/>
     <Footer formData={this.handleSumittedData} />
     {/* where delete is attribute and handleDelete is the property */}
   {this.state.contact.map((contact)=><Content  
   contact={contact}  delete={this.handleDelete} 
   edit={this.handleEditData}
   key={contact._id}/>
   )}   
   <ToastContainer /> 
    </div>
  );
}
}

export default App;