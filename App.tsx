

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Example from './src/samples/Timing/Gabarito';

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Example />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});