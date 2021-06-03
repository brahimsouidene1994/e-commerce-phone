import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  Logo from '../logo.svg';
import ButtonContainer from './styled-component/Buttons';
import NavbarWrapper from './styled-component/NavbarStyle';
import {PropTypes} from 'prop-types';
import Product from './Product';

export default class Navbar extends Component {
    render() {
        return (
            <NavbarWrapper className="navbar  navbar-dark px-sm-5">
                <Link to="/">
                    <img src={Logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-right">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/card" className="ml-auto">
                    <ButtonContainer>
                        <span >
                            <i className="fas fa-cart-plus"/>
                        </span>
                        My cart
                    </ButtonContainer>
                </Link >

            </NavbarWrapper>
        )
    }
}

Product.propTypes = {
    product : PropTypes.shape({
        id : PropTypes.number,
        img : PropTypes.string,
        title: PropTypes.string,
        price : PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired   
}
