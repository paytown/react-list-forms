import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, red, blue, green, rgb }) {
  const style = {
    backgroundColor: `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, 1)`,
    borderRadius: '10px',
    width: '50px',
    height: '50px'
  };

  return (
    <main>
      {name && (<>
        <h2>{name}</h2>
      </>)}

      <div style={style}></div>

      <h3>RGB</h3>
      <ul>
        <li>Red: {red}</li>
        <li>Green: {green}</li>
        <li>Blue: {blue}</li>
      </ul>
    </main>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  rgb: PropTypes.number,
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired,
};

export default Color;
