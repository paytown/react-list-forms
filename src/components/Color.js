import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex }) {
  const style = {
    backgroundColor: hex,
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

      <h3>Hex</h3>
      <p>{hex}</p>
    </main>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired
};

export default Color;
