import React, { useState } from 'react';
import './App.css';
import './styles/basket.css';
import Tickets from './components/Tickets/Tickets';
import ShoppingBasket from './components/ShoppingBasket/ShoppingBasket';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { getTotalSum } from './scripts/utils';

function App() {
  const ticketTypes = [
    { name: "Adult", price: 3.5, id: "adult" },
    { name: "Child", price: 1.5, id: "child" },
    { name: "OAP", price: 2.5, id: "oap" },
  ];
  const [ basket, setBasket ] = useState([]);
  return (
    <div className="App">
      <h1>Ticket purchaser</h1>
      { getTotalSum(basket) > 20 ? <ErrorMessage/> : null }
      <div className="lhs">
        <Tickets ticketTypes={ ticketTypes } setBasket={ setBasket } basket={ basket }/>
      </div>
      <div className="rhs">
        <ShoppingBasket basket={ basket }/>
      </div>
    </div>
  );
}

export default App;
