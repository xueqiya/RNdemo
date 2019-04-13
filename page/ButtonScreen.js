/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ToastAndroid, Text, View, StyleSheet } from 'react-native';
import { Button } from "@ant-design/react-native";

export default class ButtonScreen extends React.Component {
    static navigationOptions = {
        title: 'Button',
    };
    render() {
        return (
            <View>
                <Button style={styles.btn}
                    onPress={() =>                                                                                                                                                                                                                                                                                                                                                               
                        ToastAndroid.show('已点击', ToastAndroid.SHORT)
                    }>按钮</Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor:'#FFFF00',
        color:'red',
    }

})
