import React from 'react';
import {ProductConsumer} from '../../context';
import CartRow from './CartRow';

export default function CartList() {
    return (
        <ProductConsumer>
            {value=>{
                const {cart}=value;
                return cart.map(item=>{
                    return <CartRow 
                        key ={item.id} 
                        item={item} 
                        value={value}
                    />
                })
            }}
                
        </ProductConsumer>
    )
}
