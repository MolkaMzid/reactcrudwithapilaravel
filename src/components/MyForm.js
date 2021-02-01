import React, {Component} from "react";

class MyForm extends Component{
   state={
      form: { firstname:"", lastname:"", email:"", isEdit: false},
      btnName: "Save",
      btnClass:"ui green button submit-button"
   };
   isEmpty(obj){
return Object.entries(obj).length === 0 && obj.constructor === Object;
   }
   componentDidUpdate(prevProps){
      if(prevProps !== this.props && !this.isEmpty(this.props.customer)){
         this.setState({
            form:{ ...this.props.customer, isEdit: true},
            btnName: "Update",
            btnClass:"ui orange button submit-button"
         })
        // console.log("update");
      }
   }
   handleChange = event =>{
      const {name, value}=event.target;
      let form =this.state.form;
      form[name] = value;
      this.setState({form});

   }
   onFormSubmit =(event)=>{
   event.preventDefault();
   if(this.formValidation()){
      //send data to app
      this.props.onFormSubmit(this.state.form);
   }
   //clear form
this.clearFormFields();
   };
   formValidation = ()=>{
      if(document.getElementsByName("firstname")[0].value === ""){
         alert("entrer fisrt name");
         return false;
      }
      if(document.getElementsByName("lastname")[0].value === ""){
         alert("entrer last name");
         return false;
      }
      if(document.getElementsByName("email")[0].value === ""){
         alert("entrer email");
         return false;
      }
      return true;
   }
   clearFormFields= ()=>{
      //change form state
     this.setState({
       form: { firstname:"", lastname:"", email:"", isEdit: false}
       });
//clear form
       this.setState({
          btnName:"Save",
          btnClass:"ui green button submit-button"
         });
         document.querySelector(".form").reset();
   };
    render(){
    return( 
     
    <form className="ui form" >
          <div className="fields">
              <div className="four wide field">
                 <label>First Name </label>
                 <input type="text"
                  name="firstname"
                  onChange={this.handleChange}
                  placeholder="firstname"
                  value={this.state.form.firstname}/>
              </div>
              <div className="four wide field">
              <label>Last Name </label>
              <input type="text" 
              name="lastname"
              onChange={this.handleChange}
               placeholder="lastname" 
               value={this.state.form.lastname}/>
           </div>
              <div className="four wide field">
             
                 <label>Email</label>
                 <input type="text"
                  name="email" 
                  placeholder="email"
                  onChange={this.handleChange}
                   value={this.state.form.email}/>
              </div>

              <div className="four wide field">
              <button className={this.state.btnClass} onClick={this.onFormSubmit}>{this.state.btnName}</button>
            </div>
          </div>

     </form>
           
     );
    }
}

export default MyForm;
