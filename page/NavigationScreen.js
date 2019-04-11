/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

export default class NavigationScreen extends React.Component {
    static navigationOptions = {
        title: 'Navigation',
        header:null,
    };

    render() {
        const id = this.props.navigation.getParam('id', '1');
        const str = this.props.navigation.getParam('str', '默认字符');
        return (
            <View>
                <Text>传递的数字: {JSON.stringify(id)}</Text>
                <Text>传递的字符: {JSON.stringify(str)}</Text>
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
                <Button styles={styles.navigateBt}
                    title='返回到Home'
                    onPress={() =>
                        this.props.navigation.goBack()
                    }>
                </Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    navigateBt: {

    }
})
