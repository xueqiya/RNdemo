/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Button, Flex, WingBlank } from "@ant-design/react-native";

export default class FlexScreen extends React.Component {
    static navigationOptions = {
        title: 'Flex',
    };
    render() {
        return (
            <ScrollView
                style={{ flex: 1 }} >
                <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
                    <Text>direction="row":主轴为水平方向，起点在左端</Text>
                </WingBlank>
                <WingBlank style={{ marginBottom: 5 }}>
                    <Flex>
                        <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                            <Button size="small">按钮1</Button>
                        </Flex.Item>
                        <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                            <Button size='large'>按钮2</Button>
                        </Flex.Item>
                        <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                            <Button size="small">按钮3</Button>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
                <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
                    <Text>direction="column":主轴为垂直方向，起点在上沿</Text>
                </WingBlank>
                <WingBlank style={{ flex: 1, marginBottom: 5 }}>
                    <Flex direction="column">
                        <Flex.Item style={{ paddingBottom: 4 }}>
                            <Button size="small">按钮1</Button>
                        </Flex.Item>
                        <Flex.Item style={{ paddingBottom: 4 }}>
                            <Button size="large">按钮2</Button>
                        </Flex.Item>
                        <Flex.Item style={{ paddingBottom: 4 }}>
                            <Button size="small">按钮3</Button>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    redcolor: {
        backgroundColor: 'red',
    },
    color333: {
        backgroundColor: '#333333'
    },
    badge: {
        padding: 20,
    }
})
