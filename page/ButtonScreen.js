/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, ToastAndroid,Text, View } from 'react-native';

export default class ButtonScreen extends React.Component {
    static navigationOptions = {
        title: 'Button',
    };
    render() {
        return (
            <Button
                title='按钮'
                onPress={() =>
                    ToastAndroid.show('已点击',ToastAndroid.SHORT)
                }>
            </Button>
        );
    }
}
