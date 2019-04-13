/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { InputItem } from '@ant-design/react-native'

export default class TextInputScreen extends React.Component {
    static navigationOptions = {
        title: 'Text&TextInput',
    };
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View>
                <Text text='title' style={{ color: '#333333' }}>
                    文字
                </Text>
                <InputItem
                    placeholder='请输入'
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                ></InputItem>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})
