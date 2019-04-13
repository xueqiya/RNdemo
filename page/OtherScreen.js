/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WingBlank,Progress, List, Stepper, SearchBar, Accordion, NoticeBar, Flex } from "@ant-design/react-native";

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Other',
    };
    constructor(props) {
        super(props);
        this.state = {
            value: '123',
            activeSections: [],
            percent: 60,
        };
    }
    render() {
        return (
            <WingBlank>
                <Stepper
                    style={{ height: 60, margin: 30, width: 200 }}
                    key="0"
                    max={10}
                    min={1}
                    defaultValue={3}
                ></Stepper>
                <SearchBar
                    value={this.state.value}
                    onCancel={() => this.setState({ value: '' })}
                    onChange={(value) => this.setState({ value })}
                    placeholder="搜索" />
                <Accordion
                    onChange={(activeSections) => this.setState({ activeSections: activeSections })}
                    activeSections={this.state.activeSections} >
                    <Accordion.Panel header=" 1">
                        <List>
                            <List.Item> 1</List.Item>
                            <List.Item> 2</List.Item>
                            <List.Item> 3</List.Item>
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header=" 2">
                        啊哈哈哈
                    </Accordion.Panel>
                </Accordion>
                <NoticeBar mode="closable" onPress={() => alert('已关闭')}>
                    我是公告
                </NoticeBar>
                <Flex
                    direction='row'
                    style={{ marginTop: 30 }}>
                    <Progress
                        percent={this.state.percent} >
                    </Progress>
                    <Text>{this.state.percent}%</Text>
                </Flex>

            </WingBlank >
        );
    }
}
const styles = StyleSheet.create({

})
