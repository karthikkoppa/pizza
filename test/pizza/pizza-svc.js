let sortList = require('../../src/pizza/pizza-svc').sortList;
let filterList = require('../../src/pizza/pizza-svc').filterList;
import {expect} from 'code';

describe('Given the pizza service', () => {
    describe('When Sorting', () => {
        let pizzaList,
            sortedPizzaList;

        beforeEach(() =>{

            pizzaList = ['a','b','c']
            sortedPizzaList = ['c','b','a']
        });

        it('should sort in reverse alphabetical order', () => {
            const sortedList = sortList(pizzaList);
            expect(sortedList).array().equal(sortedPizzaList);
        });
    });

    describe('When filtering', () => {

        let pizzaList,
            filteredPizzaList,
            filterValue;

        beforeEach(() =>{
            pizzaList = ['a','b','c']
            filteredPizzaList = ['a']
            filterValue = 'a'
        });

        it('should filter the array if filter value found', () => {
            const filteredList = filterList(filterValue,pizzaList);

            expect(filteredList).array().equal(filteredPizzaList);
        });

        it('should not display if no filter value found', () => {
            filterValue = 'd';
            const filteredList = filterList(filterValue,pizzaList);

            expect(filteredList.length).equal(0);
        });
    })
});
