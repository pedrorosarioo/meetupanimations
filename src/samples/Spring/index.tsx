import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';

/* 
REBOUND
- friction
- tension
- speed

HARMONIC OSCILATOR
- stiffness
- damping
- mass
*/

interface IProps {}

interface IState {
  scale: Animated.Value;
}

export default class Spring extends Component<IProps, IState> {

  state = {
    scale: new Animated.Value(1)
  }

  handlePress = () => {
    Animated.spring(this.state.scale, {
      toValue: 2,
      velocity: 50,
      stiffness: 33,
      mass: 4
    }).start();
  };

  render() {
    const { scale } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View style={{ ...styles.circle, transform: [{scale}] }}>
          <TouchableOpacity onPress={this.handlePress}>
            <Text>SPRING</Text>
          </TouchableOpacity>
        </Animated.View>
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
  circle: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: '#299',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
