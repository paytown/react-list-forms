import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: 'Chose your favorite font and color ;)',
    formattedText: '',
    font: 'Comic Sans MS',
    color: '#ff0000'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      text,
      font,
      color
    } = this.state;

    const fontOptions = ['Comic Sans MS', 'Papyrus'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    return (
      <>
      <select name="font" value={font} onChange={this.handleChange}>{fontOptions}</select>
      <input type="text" name="text" value={text} onChange={this.handleChange} />
      <input type="color" name="color" value={color} onChange={this.handleChange} />
      <pre style={{ color: color, fontFamily: font }}>{text}</pre>
      </>
    );
  }
}
