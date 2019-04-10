/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

export default class TextInputScreen extends React.Component {
    static navigationOptions = {
        title: 'Text&TextInput',
    };
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        return (
            <View>
                <Text title='title'>

                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                ></TextInput>
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
