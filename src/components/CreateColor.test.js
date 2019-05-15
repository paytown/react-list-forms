import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('color picker', () => {
  it('renders color', () => {
    const wrapper = shallow(<CreateColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
