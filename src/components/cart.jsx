import React, { Component } from 'react';
//import { returnStatement } from '@babel/types';
//import { faProcedures } from '@fortawesome/free-solid-svg-icons';
import Like from './common/Like';
class Cart extends Component {
    state = { 
        cartt : [
            {
                Id: "p1",
                Product:"T-shirt(s)",
                Quantity: 5,
                Price: 600,
            },
            {
                Id: "p2",
                Product:"Pent(s)",
                Quantity: 3,
                Price: 1000,
            },
            {
                Id: "p3",
                Product:"Glasses",
                Quantity: 2,
                Price: 120,
            },
            {
                Id: "p4",
                Product:"Wrist Watch(s)",
                Quantity: 1,
                Price: 5000,
            },
            {
        
                Id: "p5",
                Product:"Shoe(s)",
                Quantity: 2,
                Price: 3200,
            },
        
        ],
        //totalPrice : [
            //{
                //'newPrice' : function(){
                //    const abc = this.state.Price * this.state.Quantity ;
              //      console.log(abc);
            //    }
          //  },
        //],
     };
     
    // finalPrice = (cartt) =>{
      //  const {length:count}=this.state.cartt;
        //const ffprice = cartt;
        //let fprice=0;
        //let fprice = ffprice.fprice + ffprice.fprice; //this.totalPrice(cartt);
        //console.log(fprice);
          //  return <p>{fprice}</p>
           // for(let i = 0 ; i<count ; i++){
            //}
        //};
     handleDelete = ( cartt ) =>{
        const newCart= this.state.cartt.filter(c=>c.Id!== cartt.Id);
        this.setState({cartt:newCart});
     };
     totalPrice= (cartt)=>{
            
            if(this.state.cartt.filter(c=>c.Id === cartt.Id)){
                const newPrice = cartt;
                //newPrice.length;
                const abc =  newPrice.Quantity * newPrice.Price;
               //console.log(abc);
               return <p>{abc}</p>;
               //<p>{abc} totalPrice</p>
               // this.setState({cartt:newPrice});
            };
            //const newPrice = this.state.cartt.Price * this.state.cartt.filter(c=>c.Price=== cartt.Price);
            //this.setState({cartt:newPrice});
     };

    render() { 
        const {length:count}=this.state.cartt;
        if (count===0)
        return <h3>cart is empty</h3>
        return ( 
            <React.Fragment>
                <h1> {count} Products in cart</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cartt.map(cartt=>(
                            <tr key={cartt.Id}>
                                <td>{cartt.Id}</td>
                                <td>{cartt.Product}</td>
                                <td>{cartt.Quantity}</td>
                                <td>{cartt.Price}</td>
                                <td>{this.totalPrice(cartt)}</td>
                                <td>
                                    <Like/>
                                </td>
                                <td>
                                <button
                                    onClick={()=>this.handleDelete(cartt)} 
                                    className="btn btn-danger btn-sm">Remove</button>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </React.Fragment>
         );
    }
}
 
export default Cart;