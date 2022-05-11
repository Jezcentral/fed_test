import React from 'react';
import ShoppingBasketItems from '../ShoppingBasketItems/ShoppingBasketItems';
import Total from '../Total/Total';

const ShoppingBasket = (props) => {
    return (<>
        <h2 className="right">Shopping basket:</h2>
        {props.basket.length > 0 ? <ShoppingBasketItems basket={ props.basket }/> : <p className="right">You have no items</p>}
        <Total basket={ props.basket }/>
    </>);
};

export default ShoppingBasket;
