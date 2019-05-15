import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    formattedText: '',
    color: '#ff0000'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      text,
      color
    } = this.state;

    return (
      <>
      <input type="text" name="text" value={text} onChange={this.handleChange} />
      <input type="color" name="color" value={color} onChange={this.handleChange} />
      <pre style={{ color }}>{text}</pre>
      </>
    );
  }
}
