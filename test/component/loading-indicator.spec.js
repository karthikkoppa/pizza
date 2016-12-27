import React from 'react';
import {expect} from 'code';
import {mount, shallow} from 'enzyme';
import {LoadingIndicator} from '../../src/component/loading-indicator';
import Chance from 'chance';

describe('Loader Component', () => {
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

        const wrapper = shallow(<LoadingIndicator {...expectedProps}/>);
        renderedElement = wrapper.node;
    });

    it('should render loader component', function () {
        expect(renderedElement.type).equals('div');
    });

    it('should render the className correctly', () => {
        expect(renderedElement.props.className).to.equal('loading-text');
    });

    describe('Given p', () => {
        let renderedChildElement;

        beforeEach(() => {
            renderedChildElement = renderedElement.props.children;
        });

        it('should render p element', function () {
            expect(renderedChildElement.type).equals('p');
        });

        it('should render loading text', () => {
            expect(renderedChildElement.props.children).to.equal(expectedProps.text);
        });
    });
});

