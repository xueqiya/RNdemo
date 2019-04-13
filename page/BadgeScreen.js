/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Flex, Badge } from "@ant-design/react-native";

export default class BadgeScreen extends React.Component {
    static navigationOptions = {
        title: 'Button',
    };
    render() {
        return (
            <View>

                <Badge
                    style={styles.badge}
                    text="9">
                </Badge>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    badge: {
        padding: 20,
    }
})
