import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated
} from 'react-native';

/* 
- add, sub, multiply, divide, modulo
*/

interface IProps {}

const Interpolation = (props: IProps) => {
  const translateY = new Animated.Value(0);
  const translateX = new Animated.Value(0);

  const opacity = translateY.interpolate({
    inputRange: [0, 290],
    outputRange: [1, 0.3]
  });

  const color = translateX.interpolate({
    inputRange: [0, 310],
    outputRange: ['#ff1', '#2d2']
  });

  const moveUp = Animated.timing(translateY, {
    toValue: 0,
    duration: 900
  });

  const moveDown = Animated.timing(translateY, {
    toValue: 290,
    duration: 900
  });

  const moveLeft = Animated.timing(translateX, {
    toValue: 0,
    duration: 900
  });

  const moveRight = Animated.timing(translateX, {
    toValue: 310,
    duration: 900
  });

  const handlePress = () => {
    const move = Animated.sequence([moveDown, moveRight, moveUp, moveLeft]);
    Animated.loop(move).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.circle,
          opacity,
          backgroundColor: color,
          transform: [{ translateX }, { translateY }]
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>COMBINING VALUES</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#02f',
    position: 'absolute',
    top: 10,
    left: 10
  }
});

export default Interpolation;
