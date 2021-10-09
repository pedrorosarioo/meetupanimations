import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
} from "react-native";

/* 
- callback start()
- Easing
- result
*/

interface IProps {}

const translateX = new Animated.Value(0);
const translateY = new Animated.Value(0);

const moveUp = Animated.timing(translateY, {
  toValue: 0,
  duration: 500,
});

const moveDown = Animated.timing(translateY, {
  toValue: 290,
  duration: 500,
});

const moveLeft = Animated.timing(translateX, {
  toValue: 0,
  duration: 500,
});

const moveRight = Animated.timing(translateX, {
  toValue: 310,
  duration: 500,
});

const handlePress = () => {
  //just uncomment the function that you want to use

  // L
  const LMove = Animated.sequence([moveDown, moveRight, moveUp, moveLeft]);
  // LMove.start();

  // square
  const squareMove = Animated.sequence([moveDown, moveRight, moveUp, moveLeft]);
  // squareMove.start();

  // square with delay
  const delayedSquareMove = Animated.stagger(600, [
    moveDown,
    moveRight,
    moveUp,
    moveLeft,
  ]);
  // delayedSquareMove.start();

  // INFINITY LOOP
  const infinityLoopMove = Animated.sequence([
    moveDown,
    moveRight,
    moveUp,
    moveLeft,
  ]);
  const infinitySquare = Animated.loop(squareMove, {
    iterations: -1,
  });
  // infinitySquare.start();
};

const Compositing = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.square,
          transform: [{ translateX }, { translateY }],
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>COMPOSITING ANIMATIONS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    bottom: 40,
    right: 90,
  },
  square: {
    height: 40,
    width: 40,
    backgroundColor: "#000",
    position: "absolute",
    top: 10,
    left: 10,
  },
});

export default Compositing;
