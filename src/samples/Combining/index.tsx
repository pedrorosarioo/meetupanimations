import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Alert
} from 'react-native';

/* 
- add, sub, multiply, divide, modulo
*/

interface IProps {}

const translateY = new Animated.Value(0);
const translateX = new Animated.Value(0);

const moveUp = Animated.timing(translateY, {
  toValue: 0,
  duration: 500
});

const moveDown = Animated.timing(translateY, {
  toValue: 290,
  duration: 500
});


const handlePress = () => {
  const move = Animated.sequence([moveDown, moveUp]);
  Animated.loop(move).start();
}


const Compositing = (props: IProps) => {

  return (
    <View style={styles.container}>
      <Animated.View 
        style={{
          ...styles.circle,
          transform: [{ translateX },{ translateY }]
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>COMBINING VALUES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    bottom: 40,
    right: 120
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#0ff',
    position: 'absolute',
    top: 10,
    left: 10
  }
});

export default Compositing;