import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Alert,
} from 'react-native';

/* 
- callback start()
- Easing
- result
*/

interface IProps {}

interface IState {
  top: Animated.Value;
}

export default class Timing extends Component<IProps, IState> {

  handlePress = () => {
    Alert.alert('Button pressed');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ ...styles.square}} />
        <TouchableOpacity onPress={this.handlePress}>
          <Text>TIMING</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  square: {
    height: 40,
    width: 40,
    backgroundColor: '#000',
    position: 'absolute',
    top: 10,
    left: 10
  }
});
