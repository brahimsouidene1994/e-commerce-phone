import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotal(props) {
    console.log('ggg',props.val)
    const { cartSubTotal, cartTax , cartTotal, clearCart } = props.val;
    return (
        <React.Fragment>
            <div className="container text-end">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-12 text-capitalize ">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                    type="button"
                                    onClick={()=>clearCart()} >
                                        clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal:</span>
                            <strong>${cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax:</span>
                            <strong>%{cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total:</span>
                            <strong>${cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
