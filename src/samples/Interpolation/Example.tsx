import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Easing
} from 'react-native';

/* 
- add, sub, multiply, divide, modulo
*/

interface IProps {}

const Interpolation = (props: IProps) => {
  const degrees = new Animated.Value(0);

  const rotateY = degrees.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  });

  const frontOpacity = degrees.interpolate({
    inputRange: [0, 90, 180, 270, 360],
    outputRange: [1, 0, 0, 0, 1]
  });

  const backOpacity = degrees.interpolate({
    inputRange: [0, 90, 180, 270, 360],
    outputRange: [0, 0, 1, 0, 0]
  });

  const color = degrees.interpolate({
    inputRange: [0, 180, 360],
    outputRange: ['#000', '#2b8', '#000']
  });

  const rotateTo = (toValue: number, duration: number) => {
    return Animated.timing(degrees, {
      toValue,
      duration,
      easing: Easing.linear
    });
  };

  const handlePress = () => {
    Animated.loop(rotateTo(360, 3000)).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.card,
          borderColor: color,
          transform: [{ rotateY }]
        }}
      >
        <Animated.Text
          style={{ ...styles.label, color, opacity: frontOpacity }}
        >
          FRENTE
        </Animated.Text>
        <Animated.Text
          style={{
            ...styles.label,
            color,
            opacity: backOpacity,
            transform: [{ scaleX: -1 }]
          }}
        >
          VERSO
        </Animated.Text>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>INTERPOLATION EXAMPLE</Text>
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
  card: {
    height: 400,
    width: 290,
    borderRadius: 25,
    borderWidth: 3,
    position: 'absolute',
    top: 20,
    left: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    position: 'absolute',
    top: '45%',
    fontSize: 40
  }
});

export default Interpolation;
