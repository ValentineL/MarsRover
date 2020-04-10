import React from 'react';
import { shallow } from 'enzyme';
import Rover from './rover';

describe('Rover', () => {
    const props = {
        ghost: true
    }

    it('should render Rover component', () => {
        const componentWithProps = shallow(<Rover {...props} />);
        expect(componentWithProps).toMatchSnapshot();

        const componentWithoutProps = shallow(<Rover />);
        expect(componentWithoutProps).toMatchSnapshot();
    });
});