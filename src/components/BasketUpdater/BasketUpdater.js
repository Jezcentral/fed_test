import React from 'react';
import { addItem, removeItem, formatCurrency } from '../../scripts/utils';

const BasketUpdater = (props) => {
    return (<>
        <div className="basketItem">
            <button className="icon" onClick={ (event) => removeItem(event, props) }><span class="minus">-</span><span class="visuallyhidden">Subtract</span></button>
            <span className="basket-item--info">{ props.ticketType.name } (&pound;{ formatCurrency(props.ticketType.price) }) each)</span>
            <button className="icon" onClick={ (event) => addItem(event, props) }><span class="plus">+</span><span class="visuallyhidden">Add</span></button>
        </div>
    </>);
};

export default BasketUpdater;
