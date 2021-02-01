import React, {Component} from "react";
import Customer from "./Customer";
class CustomerList extends Component{
    
    onDelete=(id)=>{
      //  console.log("customer list", id);
      this.props.onDelete(id);
         };
    onEdit= data =>{
            //  console.log("customer list", id);
            this.props.onEdit(data);
     };
    render(){
        const customers = this.props.customers;
        return( 
           <div className="data">
               <table className="ui celled table">
                    <thead>
                      <tr>
                         <th style={{width:"50px",textAlign:"center"}}>#</th>
                         <th style={{textAlign:"center"}}>First Name</th>
                         <th style={{textAlign:"center"}}>Last Name</th>
                         <th style={{textAlign:"center"}}>Email</th>
                         <th style={{width:"148px",textAlign:"center"}}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                
                        {customers.map((customer)=>{
                            return <Customer
                            customer={customer} 
                            key={customer.id}
                            onDelete={this.onDelete}
                            onEdit={this.onEdit}/>
                           // console.log(customer);
                        })}
                    </tbody>
               </table>
           </div>
            );

    }
}
export default CustomerList;