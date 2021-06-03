import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import ButtonContainer from './styled-component/Buttons';
import { Link } from 'react-router-dom';
import { ModalContainer } from './styled-component/ModalStyle';
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { modalOpen } = value;
                        const {title, img, price } = value.modalProduct;
                        if (!modalOpen) {
                            return null;
                        }
                        else {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div
                                                id="modal"
                                                className="col-8 mx-auto col-md-6 
                                                    col-lg-4 text-center text-capitalize py-5"  >
                                                <h5>Add it to the cart!</h5>
                                                <img src={img} className="img-fluid" alt="product" />
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">Price: ${price}</h5>
                                                <Link to="/">
                                                    <ButtonContainer
                                                        onClick={() => {
                                                            value.closeModal();
                                                        }}
                                                    >
                                                        Continue shopping
                                                </ButtonContainer>
                                                </Link>
                                                <br />
                                                <Link to="/card">
                                                    <ButtonContainer
                                                        btn_cart                                                      
                                                        onClick={() => {
                                                            value.closeModal();
                                                        }}
                                                    >
                                                        go to cart
                                                </ButtonContainer>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </ModalContainer>
                            )
                        }
                    }
                }
            </ProductConsumer>
        )
    }
}

