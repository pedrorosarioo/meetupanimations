import React from 'react';
import {
  View,
  Text,
  Platform,
  FlatList,
  Dimensions,
  ListRenderItemInfo,
  Animated,
  StyleSheet
} from 'react-native';

const { width, height } = Dimensions.get('window');

const AnimatedEvent = (props: any) => {
  const renderItem = (card: ListRenderItemInfo<number>) => {
    return (
      <View style={styles.card}>
        <Text>Texto {card.item}</Text>
      </View>
    );
  };

  const data = [1, 2, 3, 4, 5];

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
      />
      <View style={styles.dotContainer}>
        {data.map((_, index: number) => {
          return <Animated.View key={index} style={{ ...styles.dot }} />;
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
    marginHorizontal: 15,
    backgroundColor: 'rgb(200,200,200)'
  }
});

export default AnimatedEvent;
