import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('color list', () => {
  it('renders colors from array', () => {
    const wrapper = shallow(<Colors colors={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
