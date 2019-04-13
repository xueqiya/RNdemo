/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ToastAndroid, Text, View, StyleSheet } from 'react-native';
import { Switch } from "@ant-design/react-native";

export default class SwitchScreen extends React.Component {
    static navigationOptions = {
        title: 'Switch',
    };
    constructor(props) {
        super(props);
        this.onSwitchChange = value => {
            this.setState({
                checked: value,
            });
        };
        this.state = {
            checked: false,
        };
    }
    render() {
        return (
            <View >
                <Switch
                
                    style={{ margin: 50 }}
                    checked={this.state.checked}
                    onChange={this.onSwitchChange} ></Switch>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FFFF00',
        color: 'red',
    }

})
