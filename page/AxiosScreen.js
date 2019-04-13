/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {  Alert, ActivityIndicator,FlatList, Text, View, StyleSheet } from 'react-native';
import { Modal } from "@ant-design/react-native";
import axios from 'axios';

export default class AxioScreen extends React.Component {
    static navigationOptions = {
        title: 'Axio',
    };
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    render() {
        if (!this.state.data) {
            return (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        }
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item, index }) =>
                    <View>
                        <Text
                            style={styles.tit}
                            onPress={() => this.onItemPress(index)}> {item.title}
                        </Text>
                    </View>
                }
                keyExtractor = {(index,item)=>"index"+index+item}   
                ItemSeparatorComponent={() =>
                    <View
                        style={styles.line}>
                    </View>
                }
            ></FlatList >
        );
    }
    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/xueqiya/testJson/master/update.json')
            .then((response) => {
                console.log(response.data.data)
                this.setState({
                    data: response.data.data,
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    onItemPress(index) {
        Modal.alert(
            '详情',
            this.state.data[index].details,
            [{
                text: '确定',
                style: 'cancel'
            }]
        );
       // Alert.alert( this.state.data[index].details)
    }
}
const styles = StyleSheet.create({
    tit: {
        height: 40,
        textAlign: 'left',
        fontSize: 20,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: "#d1d0d4"
    },
})
