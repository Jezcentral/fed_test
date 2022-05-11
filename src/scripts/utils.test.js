import { addItem, removeItem, formatCurrency, getTicketTypes } from "./utils";

describe('Utils tests', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('addItem', () => {

        const eventObj = { preventDefault: jest.fn() };
        const propsObj = {
            basket: [],
            ticketType: {
                name: 'testName',
                price: 'testPrice',
                id: 'testId'
            },
            setBasket: jest.fn()
        }
        beforeEach(() => {
            addItem(eventObj, propsObj);
        });

        it('should prevent the default event happening', () => {
            expect(eventObj.preventDefault).toHaveBeenCalled();
        });

        it('should set an updated basket with the new added item', () => {
            expect(propsObj.setBasket).toHaveBeenCalledWith([{
                name: 'testName',
                price: 'testPrice',
                id: 'testId'
            }]);
        });

    });

    describe('removeItem', () => {

        const eventObj = { preventDefault: jest.fn() };
        const successfulPropsObj = {
            basket: [{
                name: 'testName',
                price: 'testPrice',
                id: 'testId'
            }],
            ticketType: {
                name: 'testName',
                price: 'testPrice',
                id: 'testId'
            },
            setBasket: jest.fn()
        };
        const missingPropsObj = {
            basket: [{
                name: 'testName',
                price: 'testPrice',
                id: 'testId'
            }],
            ticketType: {
                name: 'testName2',
                price: 'testPrice2',
                id: 'testId2'
            },
            setBasket: jest.fn()
        };

        it('should prevent the default event happening', () => {
            removeItem(eventObj, successfulPropsObj);
            expect(eventObj.preventDefault).toHaveBeenCalled();
        });

        it('should remove the item from the basket, if it is there', () => {
            removeItem(eventObj, successfulPropsObj);
            expect(successfulPropsObj.setBasket).toHaveBeenCalledWith([]);
        });

        it('should NOT remove the item from the basket, if it is NOT there', () => {
            removeItem(eventObj, missingPropsObj);
            expect(missingPropsObj.setBasket).toHaveBeenCalledWith([{
                name: 'testName',
                price: 'testPrice',
                id: 'testId'
            }]);
        });

    });

    describe('formatCurrency', () => {

        it('should return a number as a string', () => {
            expect(typeof formatCurrency(1)).toBe('string');
        });

        it('should return a whole number to two-decimal places', () => {
            expect(formatCurrency(2)).toBe('2.00');
        });

        it('should return a one-decimal place number to two-decimal places', () => {
            expect(formatCurrency(2.5)).toBe('2.50');
        });

        it('should return a two-decimal place number to two-decimal places', () => {
            expect(formatCurrency(3.45)).toBe('3.45');
        });

    });

    describe('getTicketTypes', () => {

        const propsObj = {
            basket: [{
                name: 'testName',
                price: 2.5,
                id: 'testId'
            }]
        };

        it('should return an array of the different ids of the ticket types', () => {
            expect(getTicketTypes(propsObj)).toStrictEqual(['testId']);
        });

    });

});
