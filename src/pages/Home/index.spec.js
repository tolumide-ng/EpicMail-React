import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('Test Home', () => {
  it('should render the homepage', () => {
    const component = shallow(<Home />);
    const contain = component.find('.text-white');
    expect(contain.length).toBe(1);
  });
});
