import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  };

  state = {
    name: '',
    color: '#FF0000'
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, color } = this.state;
    this.props.addColor({ name, hex: color });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { color, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <input type="color" name="color" value={color} onChange={this.handleChange} />
        <button>Clicky</button>
      </form>
    );
  }
}
