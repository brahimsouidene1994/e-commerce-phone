import React from 'react'
import { Link } from 'react-router-dom';
import { ProductWrapper } from './styled-component/Productstyle';
import { ProductConsumer } from '../context';

export default function Product(props) {

    const { id, title, img, price, inCart } = props.product
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
            <ProductConsumer>
                {val => {
                    return (<div className="card">
                        <div className="img-container p-5"
                            onClick={() => { val.handleProduct(id) }}>
                            <Link to={`/details/`}>
                                <img src={img} alt="product" className="card-img-top" />
                            </Link>
                            <button className="cart-btn"
                                disabled={inCart ? true : false}
                                onClick={() => { 
                                    val.addToCart(id);
                                    val.openModal(id);
                                    val.openModal(id);
                                 }}>
                                {inCart ?
                                    <p className="text-capitalize mb-0">in Cart</p> :
                                    <i className="fas fa-cart-plus" />
                                }
                            </button>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">$</span>
                                {price}
                            </h5>
                        </div>
                    </div>)
                }}
            </ProductConsumer>
        </ProductWrapper >
    )
}


