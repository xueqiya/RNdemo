/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Flex } from "@ant-design/react-native";
//import { observe } from 'mobx'
 
class MobxScreen extends React.Component {
    static navigationOptions = {
        title: 'Mobx',
    };
    render() {
        return (
            <View>
               // <Text style={styles.mar}>{MobxState.timer}</Text>
                <Flex direction='row'>
                    <Button style={styles.mar}>  +  </Button>
                    <Button style={styles.mar}>  -  </Button>
                </Flex>
            </View>
        );
    }
}
export default MobxScreen;
const styles = StyleSheet.create({
    mar: {
        margin: 10
    }

})