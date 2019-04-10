/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, Text, StyleSheet,View } from 'react-native';

export default class NavigationScreen extends React.Component {
    static navigationOptions = {
        title: 'Navigation',
    };
    render() {
        return (
            <View>
                <Button
                    title='push跳转到Navigation'
                    onPress={() =>
                        this.props.navigation.push("NavigationScreen")
                    }>
                </Button>
                <Button styles={styles.navigateBt}
                    title='navigate跳转到Navigation'
                    onPress={() =>
                        this.props.navigation.navigate("NavigationScreen")
                    }>
                </Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    navigateBt:{
        
    }
})
