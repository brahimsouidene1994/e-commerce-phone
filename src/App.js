import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import EmptyPage from './component/EmptyPage';
import Card from './component/cart/Card';
import Modal from './component/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/card" component={Card}/>
        <Route component={EmptyPage}/>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
