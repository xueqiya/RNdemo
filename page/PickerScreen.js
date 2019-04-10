/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Picker, StyleSheet, ToastAndroid, Text, View } from 'react-native';

export default class PickerScreen extends React.Component {
    static navigationOptions = {
        title: 'Picker',
    };
    constructor(props) {
        super(props);
        this.state = {
            num: ''
        };
    }
    render() {
        return (
            <Picker
                selectedValue={this.state.language}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({ num: itemValue })}>
                <Picker.Item label="label1" value="value1" />
                <Picker.Item label="label2" value="value2" />
            </Picker>
        );
    }
}
const styles = StyleSheet.create({
    picker: {
        height:50,
        width:300,
    }
})
