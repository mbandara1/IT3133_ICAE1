
import '../assets/CSS/layout.css';
import Product from './Product';
import Cart from './Cart';
import { flowers } from './FlowerDb';
import {useState} from 'react'


export default function Products(){
    const [cart,setCart]=useState([]);

    const AddToCart =(flower) =>{
        const existingItem = cart.find((item) => item.id === flower.id)
        if(existingItem){
            setCart(
                cart.map((item) =>
                    item.id === flower.id ? {...item,qty: item.qty + flower.qty} : item
                )
            );
        }else{
            setCart([...cart,{...flower}])
        }
     }
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map((flower)=>(
                            <Product 
                               key={flower.id}
                               flower={flower}
                               />
                        )
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                }
            </div>
        </>
    );

}