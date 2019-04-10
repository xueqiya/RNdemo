/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default class ActivityIndicatorScreen extends React.Component {
    static navigationOptions = {
        title: 'ActivityIndicator',
    };
    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
                <ActivityIndicator size="small" color="#00ff00" />
                <ActivityIndicator size="large" color="#0000ff" />
                <ActivityIndicator size="small" color="#00ff00" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})
