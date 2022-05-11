import { formatCurrency, getTicketTypes } from '../../scripts/utils';

const ShoppingBasketItems = (props) => {
    const types = getTicketTypes(props);
    return (
        <ul>
            { types.map((type, index) => {
                const noOfTickets = props.basket.filter((basketItem) => basketItem.id === type).length;
                const costOfTickets = props.basket.find((basketItem) => basketItem.id === type).price;
                return (<li className="shopping-item" key={ index }>{ noOfTickets } { type } tickets @ &pound;{ formatCurrency(costOfTickets * noOfTickets) }</li>);
            }) }
        </ul>
    )
};

export default ShoppingBasketItems;
