export const addItem = (event, props) => {
    event.preventDefault();
    const updatedBasket = [
        ...props.basket,
        {
            name: props.ticketType.name,
            price: props.ticketType.price,
            id: props.ticketType.id
        }
    ];
    props.setBasket(updatedBasket);
};

export const removeItem = (event, props) => {
    event.preventDefault();
    const updatedBasket = [...props.basket];
    const deleteIndex = updatedBasket.findIndex((basketItem) => basketItem.name === props.ticketType.name && basketItem.price === props.ticketType.price);
    if (deleteIndex !== -1) updatedBasket.splice(deleteIndex, 1);
    props.setBasket(updatedBasket);
};

export const formatCurrency = (number) => {
    const currency = number.toString().split('.');
    if (currency.length === 1) {
        return currency + '.00';
    } else if (currency.length > 1) {
        if (currency[1].length === 1) {
            return `${currency[0]}.${currency[1]}0`;
        } else {
            return `${currency[0]}.${currency[1]}`;
        }
    }
};

export const getTicketTypes = (props) => {
    const ticketTypes = [];
    props.basket.forEach((basketItem) => {
        if (!ticketTypes.includes(basketItem.id)) {
            ticketTypes.push(basketItem.id)
        }
    });
    return ticketTypes;
};

export const getTotalSum = (items) => {
    let totalCost = 0;
    items.forEach((item) => totalCost += item.price);
    return totalCost;
};
