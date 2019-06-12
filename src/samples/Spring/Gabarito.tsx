import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Alert,
  Easing
} from 'react-native';

/* 
- friction
- tension
*/

interface IProps {}

interface IState {
  scale: Animated.Value;
}

export default class Timing extends Component<IProps, IState> {

  state = {
    scale: new Animated.Value(1)
  }

  handlePress = () => {
    const { scale } = this.state;
    Animated.spring(scale, {
      toValue: 2,
      friction: 1,
      tension: 41,
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
