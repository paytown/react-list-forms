import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <li style={{ listStyle: 'none' }} key={color.name}>
        <Color name={color.name} hex={color.hex} />
      </li>
    );
  });

  return <ul style={{
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around'
  }}>{colorList}</ul>;
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
