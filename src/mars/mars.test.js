import React from 'react';
import { shallow } from 'enzyme';
import Mars from './mars';

describe('Mars', () => {
    const props = {
        position: "0 0 N",
        execute: true,
        commands: 'MMRMMLMMRM',
        size: 5,
        startPosition: '00N'
    };

    const initialState = {
        start: null,
        end: null,
        ops: [],
        position: "0 0 N",
        facing: "N",
        path: null,
        error: null
    };

    it('should render Mars component', () => {
        const component = shallow(<Mars {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should render Mars component with initial state', () => {
        let component = shallow(<Mars {...props} />);
        component.setState({ state: initialState }, () => { component.update(); });
    });
});