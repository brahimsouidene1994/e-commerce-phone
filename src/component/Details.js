import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import ButtonContainer from './styled-component/Buttons';

export default function Details() {
        return (            
        <ProductConsumer>
            {val=>{
            const {id, title, img, company, price, info, inCart} = val.productDetail;
            //console.log('test', val.productDetail);
            return(
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="row">    
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <img src={`../${img}`} className="img-fluid"  alt="product"/>
                        </div>  
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h1>model: {title}</h1>
                            <h4 className="text-title text-text-uppercase text-muted mt-3 mb-2"> 
                                mady by: {company}
                            </h4>
                            <h4 className="text-blue">
                                <strong>
                                    price: <span>$</span>
                                    {price}
                                </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info : {info}
                            </p>
                            {/* buttons*/}
                            <div>
                                <Link to="/">
                                    <ButtonContainer>Back to products</ButtonContainer>
                                </Link>
                                <Link to="/card">
                                    <ButtonContainer 
                                        btn_cart
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                            val.addToCart(id);
                                        }
                                        }
                                        >
                                        {inCart?"in cart":"add to cart"}
                                    </ButtonContainer>
                                </Link>
                            </div> 
                        </div>  
                    </div>
                </div>
                )
            }}
        </ProductConsumer>
        )
}
