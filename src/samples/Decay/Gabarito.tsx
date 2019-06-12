import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';

/* 
- velocity
*/

interface IProps {}

interface IState {
  translateX: Animated.Value;
}

export default class Timing extends Component<IProps, IState> {
  
  state = { 
    translateX: new Animated.Value(0),
  }

  handlePress = () => {
    const { translateX } = this.state;
    const move = Animated.decay(translateX, {
      velocity: 0.7,
    });

    move.start();
  }

  render() {
    const { translateX } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={{ ...styles.triangle, transform: [{translateX}] }} />
        <TouchableOpacity onPress={this.handlePress}>
          <Text>DECAY</Text>
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
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: '#359',
    borderTopWidth: 20,
    borderTopColor: 'transparent',
    borderBottomWidth: 20,
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: 10,
    left: 10
  }
});
