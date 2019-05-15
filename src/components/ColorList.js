import React, { PureComponent } from 'react';
import CreateColor from './CreateColor';
import Colors from './Colors';

export default class ColorList extends PureComponent {
  state={
    colors: []
  }

  addColor = color => {
    this.setState(state => {
      return {
        colors: [...state.colors, color]
      };
    });
  }

  render() {
    const { colors } = this.state;
    return (
      <>
        <CreateColor addColor={this.addColor} />
        <Colors colors={colors} />
      </>
    );
  }
}
