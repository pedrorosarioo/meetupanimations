import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ListRenderItemInfo,
  Animated,
  StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');

const AnimatedEventSample = (props: any) => {
  const scrollX = new Animated.Value(0);

  const renderItem = (card: ListRenderItemInfo<number>) => {
    return (
      <View style={styles.card}>
        <Text>Texto {card.item}</Text>
      </View>
    );
  };

  const data = [1, 2, 3, 4, 5];
  const dotIndex: Animated.AnimatedDivision = Animated.divide(scrollX, width);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index: number) => `tour-item-${index}`}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }
        ])}
        scrollEventThrottle={16}
      />
      <View style={styles.dotContainer}>
        {data.map((_, index: number) => {
          const dotColor = dotIndex.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['rgb(218,218,218)', '#21f', 'rgb(218,218,218)'],
            extrapolate: 'clamp'
          });

          return (
            <Animated.View
              key={index}
              style={{ ...styles.dot, backgroundColor: dotColor }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 15
  }
});

export default AnimatedEventSample;
