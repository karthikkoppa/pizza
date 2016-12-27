import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import SearchPizza from '../../src/pizza/search-pizza';
import Chance from 'chance'
import sinon from 'sinon'

const chance = new Chance();

describe('<SearchPizza /> Component', () => {

    let expectedProps,
        renderedElement,
        sandbox;

    beforeEach(() =>{
        sandbox = sinon.sandbox.create();

        expectedProps = Object.freeze({
            onTextEntered: sandbox.stub(),
            placeHolder: chance.string()
        });

        renderedElement = shallow(<SearchPizza {...expectedProps}/>);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should be a <div/>', () => {
        expect(renderedElement.type()).string().equal('input');
    });

    it('should have an `onTextEntered` callback', () => {
        renderedElement.props().onChange();
        sinon.assert.calledOnce(expectedProps.onTextEntered);
    });

    it('should have a class name', () => {
        expect(renderedElement.hasClass('form-control')).true();
    });

    it('should have `placeHolder`', () => {
        expect(renderedElement.props().placeholder).equal(expectedProps.placeHolder);
    });

});
