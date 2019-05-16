import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('sidebar', () => {
  it('makes a sidebar', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
