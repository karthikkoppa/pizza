import React from 'react';
import {expect} from 'code';
import {mount, shallow} from 'enzyme';
import {Header} from '../../src/component/header';
import Chance from 'chance';

describe('Header Component', () => {
    let chance,
        expectedProps,
        renderedElement;

    function givenProps() {
        return Object.freeze({
            text: chance.string()
        });
    }

    beforeEach(() => {
        chance = new Chance();
        expectedProps = givenProps();

        const wrapper = shallow(<Header {...expectedProps}/>);
        renderedElement = wrapper.node;
    });

    it('should render header component', function () {
        expect(renderedElement.type).equals('div');
    });

    it('should render the className correctly', () => {
        expect(renderedElement.props.className).to.equal('header');
    });

    describe('Given h1', () => {
        let renderedChildElement;

        beforeEach(() => {
            renderedChildElement = renderedElement.props.children;
        });

        it('should render h1 element', function () {
            expect(renderedChildElement.type).equals('h1');
        });

        it('should render header text', () => {
            expect(renderedChildElement.props.children).to.equal(expectedProps.text);
        });
    });
});
