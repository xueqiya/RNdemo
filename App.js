/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, Platform, Alert, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Button
          style={styles.btn}
          title={'点击前往nav1'}
          onPress={() => {
            this.props.navigation.push('button')
          }}
        />
        <FlatList
          data={[
            { key: '0.Button' },
            { key: '1.Alert' },
            { key: '2.Alert' },
            { key: '3.Alert' },
            { key: '4.Alert' },
            { key: '5.Alert' },
            { key: '6.Alert' },
            { key: '7.Alert' },
            { key: '8.Alert' },
            { key: '9.Alert' },
            { key: '10.Alert' }
          ]}
          renderItem={({ item, index }) =>
            <Text
              onPress={() => this.onItemPress(index)}
              style={styles.tit}>{item.key}
            </Text>
          }
        ></FlatList>
      </View>
    );
  }
  onItemPress = (index) => {
    switch (index) {
      case 0:
       
        break;
      case 1:
        Alert.alert('我是对话框');
        break;
    }
  };
}

const styles = StyleSheet.create({
  tit: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#333',
    fontSize: 30,
  }
});
