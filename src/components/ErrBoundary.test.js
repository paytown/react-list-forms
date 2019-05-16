import React from 'react';
import { shallow } from 'enzyme';
import ErrBoundary from './ErrBoundary';

describe('err boundary', () => {
  it('throws err instead of breaking page', () => {
    const wrapper = shallow(<ErrBoundary />);
    expect(wrapper).toMatchSnapshot();
  });
});
