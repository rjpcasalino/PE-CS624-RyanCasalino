import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: '#ededed',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  countContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    color: 'red',
  },
});

const buttons = StyleSheet.create({
  primary: {
    width: 340,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default class Section04 extends Component {
  state = {
    count: 5,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPress} underlayColor="#cc0000">
          <View style={buttons.primary}>
            <Text style={buttons.buttonText}>Listing 4.4 Touch Here</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            {this.state.count ? this.state.count : null}
          </Text>
        </View>
      </View>
    );
  }
}
