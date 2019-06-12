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
- callback start()
- Easing
- result
*/

interface IProps {}

interface IState {
  top: Animated.Value;
  isOnBottom: boolean;
}

export default class Timing extends Component<IProps, IState> {
  
  state = { 
    top: new Animated.Value(0),
    isOnBottom: false
  }

  handlePress = () => {
    const { top, isOnBottom } = this.state;

    const move = Animated.timing(top, {
      toValue: isOnBottom ? 0 : 600,
      duration: 600,
      easing: Easing.elastic(0.7)
    });

    move.start((result) => { 
      if (result.finished) {
        this.setState({ isOnBottom: !isOnBottom });
      }
    });
  }

  render() {
    const { top } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={{ ...styles.square, top }} />
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
