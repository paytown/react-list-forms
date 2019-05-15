import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ title, photos }) {
  return (
    <div>
      <h3>{title}</h3>
      <Photos photos={photos} />
    </div>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array.isRequired
};

PhotoAlbum.defaultProps = {
  title: 'My Cool Dogs'
};

export default PhotoAlbum;
