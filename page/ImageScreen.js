/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class ImageScreen extends React.Component {
    static navigationOptions = {
        title: 'Image',
    };
    render() {
        return (
            <View>
                <Image
                    style={styles.img}
                    source={require('../img/github.png')} ></Image>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
    }
})
