import React from 'react';
import BasketUpdater from '../BasketUpdater/BasketUpdater';

const Tickets = (props) => {
    return (<>
        <h2>Select your tickets</h2>
        <ul>
            {
                props.ticketTypes.map((ticketType, index) => {
                    return (<BasketUpdater 
                        key={ index } 
                        ticketType={ ticketType } 
                        setBasket={ props.setBasket } 
                        basket={ props.basket }
                    />);
                })
            }
        </ul>
    </>);
};

export default Tickets;
