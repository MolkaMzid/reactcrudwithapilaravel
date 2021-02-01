import React, {Component} from "react";

class Customer extends Component{
  onDelete=()=>{
 //console.log("customer on delete");
 this.props.onDelete(this.props.customer.id);
  };
  onEdit=()=>{
   //console.log("customer on edit");
    this.props.onEdit(this.props.customer);
     };
    render()
    {
        const {id,firstname,lastname,email} = this.props.customer;
          return(
            <tr>
            <td style={{textAlign:"center"}}>{id}</td>
            <td style={{textAlign:"center"}}>{firstname}</td>
            <td style={{textAlign:"center"}}>{lastname}</td>
            <td style={{textAlign:"center"}}>{email}</td>
            <td>
            <button className="mini ui blue button" onClick={this.onEdit}>Edit</button>
            <button className="mini ui red button" onClick={this.onDelete}>Delete</button>
            </td>
           </tr>
               );
    }
}

export default Customer;
