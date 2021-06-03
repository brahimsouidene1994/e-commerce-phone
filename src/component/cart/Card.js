import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';
import Empty from './Empty';
export default class Card extends Component {
    render() {
        
        return (
            <div>
                <ProductConsumer>
                    {val => {
                        
                        const { cart } = val;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your " title="cart" />
                                    <CartColumns />
                                    <CartList />
                                    <CartTotal val={val} />
                                </React.Fragment>
                            );
                        } else {
                            return <Empty />
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
