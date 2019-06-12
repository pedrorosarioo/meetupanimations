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
- parallel, sequence, stagger, delay, loop
*/

interface IProps {}

const translateX = new Animated.Value(0);
const translateY = new Animated.Value(0);

const moveUp = Animated.timing(translateY, {
  toValue: 0,
  duration: 500
});

const moveDown = Animated.timing(translateY, {
  toValue: 290,
  duration: 500
});

const moveLeft = Animated.timing(translateX, {
  toValue: 0,
  duration: 500
});

const moveRight = Animated.timing(translateX, {
  toValue: 310,
  duration: 500,
})

const handlePress = () => {
  const squareMove = Animated.sequence([moveDown, moveRight, moveUp, moveLeft]);
  const loopSquare = Animated.loop(squareMove);
  loopSquare.start();
}


const Compositing = (props: IProps) => {

  return (
    <View style={styles.container}>
      <Animated.View 
        style={{
          ...styles.square,
          transform: [{ translateX },{ translateY }]
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>COMPOSITING ANIMATIONS</Text>
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
    right: 90
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

export default Compositing;