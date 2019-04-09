/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, Platform, Alert, StyleSheet, Text, View, Button } from 'react-native';


export default class App extends Component {
  render(navigation) {
    return (
      <View>
        <Button
          onPress={() => navigation.navigate('Details')}
          title='Go to Details'
        >
        </Button>
        <FlatList
          data={[{ key: 'Button' }, { key: 'b' }]}
          renderItem={({ item, index }) =>
            <Text
              onPress={onItemPress(index)}
              style={styles.item}>{item.key}
            </Text>
          }
        ></FlatList>
      </View>
    );
  }
}

const onItemPress = (index) => {
  switch (index) {
    case 0:
      Alert.alert(index + "");
      break;
    case 1:
      Alert.alert(index + "");
      break;
  }

};
const styles = StyleSheet.create({
  item: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#333',
    fontSize: 30,
  }
});
