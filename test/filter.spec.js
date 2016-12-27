import React, {Component} from 'react';
import pizzaList from '../src/pizza/pizza-svc';
import {LoadingIndicator} from '../src/component/loading-indicator';
import {Header} from '../src/component/header';
import SearchPizza from '../src/pizza/search-pizza';
import Pizza from '../src/pizza/pizza';
let sortList = require('../src/pizza/pizza-svc').sortList;
let filterList = require('../src/pizza/pizza-svc').filterList;

import {Filter} from '../src/filter'

import Chance from 'chance'
import {expect} from 'code';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

const chance = new Chance();

describe('<Filter /> Component', () => {
    let renderedFilter,
        sandbox,
        testProps;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        testProps = Object.freeze({
            pizzas: [chance.string(),chance.string(),chance.string()],
            pizzasList: [],
            isLoading: false,
            sortPizza: sandbox.stub()
        });
        renderedFilter = shallow(<Filter {...testProps}/>);
        renderedFilter.setState({pizzas:testProps.pizzas,pizzasList:testProps.pizzas,isLoading: false});
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should be a <div/>', () => {
        expect(renderedFilter.type()).string().equal('div');
    });

    it('should have class name>', () => {
        expect(renderedFilter.node.props.className).string().equal('container');
    });


    describe('given <Header/>', () => {

        let headerElement;

        beforeEach(() => {
            headerElement = renderedFilter.node.props.children[0];
        });

        it('should render header', () => {
            expect(headerElement.type).function().equal(Header);
        });

        it('should have text', () => {
            expect(headerElement.props.text).equal('PIZZA SHOP !!!');
        });

    });

    describe('given search', () => {
        let childElement;

        beforeEach(() => {
            childElement = renderedFilter.node.props.children[1];
        });

        it('should render div', () => {
            expect(childElement.type).equal('div');
        });

        it('should have class name', () => {
            expect(childElement.props.className).equal('row col-lg-6 input-group');
        });

        describe('and <SearchPizza/> component', () => {
            let searchElement;

            beforeEach(() => {
                searchElement = childElement.props.children[0];
            });

            it('should render search element', () => {
                expect(searchElement.type).equal(SearchPizza);
            });

            it('should have class name', () => {
                expect(searchElement.props.placeHolder).equal('Search here...');
            });

            it('`should have a callback `onTextEntered`', () => {

                const expectedPizza = chance.string();

                const eventMock = {
                    target: {
                        value: expectedPizza
                    }
                };
                searchElement.props.onTextEntered(eventMock);

            });
        });

        describe('and sort button', () => {
            let buttonElement;

            beforeEach(() => {
                buttonElement = childElement.props.children[1].props.children;
            });

            it('should render button element', () => {
                expect(buttonElement.type).equal('button');
            });

            it('should have text', () => {
                expect(buttonElement.props.children).equal('SORT');
            });

            it('should have an `onSortClick` callback', () => {
                buttonElement.props.onClick();
            });
        });
    });

    describe('given <Pizza/>', () => {

        let pizzaElement;

        beforeEach(() => {
            pizzaElement = renderedFilter.node.props.children[2];
        });

        it('should render pizza', () => {
            expect(pizzaElement.type).function().equal(Pizza);
        });

        it('should have list', () => {
            expect(pizzaElement.props.list).equal(testProps.pizzas);
        });

    });
});
