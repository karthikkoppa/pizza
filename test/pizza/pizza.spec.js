import React from 'react';
import {expect} from 'code';
import {mount, shallow} from 'enzyme';
import Pizza from '../../src/pizza/pizza';
import Chance from 'chance';

describe('Pizza Component', () => {
    let chance,
        expectedProps,
        renderedElement;

    function givenProps() {
        return Object.freeze({
            list: [
                chance.string,
                chance.string
            ]
        });
    }

    beforeEach(() => {
        chance = new Chance();
        expectedProps = givenProps();

        const wrapper = shallow(<Pizza {...expectedProps}/>);
        renderedElement = wrapper.node;
    });

    it('should render ul', function () {
        expect(renderedElement.type).equals('ul');
    });

    it('should render the className correctly', () => {
        expect(renderedElement.props.className).to.equal('col-md-6');
    });

    describe('Given li', () => {
        let renderedChildElement;

        beforeEach(() => {
            renderedChildElement = renderedElement.props.children[0];
        });

        it('should render li element', function () {
            expect(renderedChildElement.type).equals('li');
        });

        it('should render the className', () => {
            expect(renderedChildElement.props.className).to.equal('col-sm-8');
        });
    });
});
