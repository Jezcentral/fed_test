import React from 'react';
import { formatCurrency, getTotalSum } from '../../scripts/utils';

const Total = (props) => {
    return (<p className="total">TOTAL: &pound;{ formatCurrency(getTotalSum(props.basket)) }</p>);
};

export default Total;
