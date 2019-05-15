import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';

describe('it displays cool dogs', () => {
  it('lets see those dogs', () => {
    const wrapper = shallow(<PhotoAlbum photos={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
