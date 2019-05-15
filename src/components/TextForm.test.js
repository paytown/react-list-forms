import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('text formatter', () => {
  it('change the format of text input', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
