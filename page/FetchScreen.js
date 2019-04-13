/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ToastAndroid, Text, View, StyleSheet } from 'react-native';
import { Button, Flex } from "@ant-design/react-native";

export default class FetchScreen extends React.Component {
    static navigationOptions = {
        title: 'Fetch',
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View></View>
        );

    }
    componentDidMount() {
        let formData = new FormData();
        formData.append("uid", "xueqi");
        formData.append("pageNum", "1");
        formData.append("size", "10");
        console.log('开始请求')
        fetch('http://144.202.127.3:8080/appApi/note', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((jsonData) => {
                alert(jsonData);
            })
            .catch((error) => {
                alert(error);
            });
    }
}