import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import getStyleSheet from '../styles';

export default class Section05 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: Boolean(props.initialDarkTheme),
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ darkTheme: !this.state.darkTheme });
  }

  render() {
    const styles = getStyleSheet(this.state.darkTheme);
    const backgroundColor =
      StyleSheet.flatten(styles.container).backgroundColor;

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Button
            title={backgroundColor.toUpperCase()}
            onPress={this.toggleTheme}
          />
        </View>
      </View>
    );
  }
}
