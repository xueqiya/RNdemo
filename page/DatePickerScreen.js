/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ToastAndroid, Text, View, StyleSheet } from 'react-native';
import { List,DatePicker ,Provider} from "@ant-design/react-native";

export default class DatePickerScreen extends React.Component {
    static navigationOptions = {
        title: 'DatePicker',
    };
    constructor(props) {
        super(props);
        this.state = { value: undefined, };
    }
    render() {
        return (
            <Provider>
                <List>
                    <DatePicker
                        value={this.state.value}
                        mode="date"
                        minDate={new Date(2015, 1, 1)}
                        maxDate={new Date(2019, 12, 30)}
                        onChange={this.onChange}
                        format="YYYY-MM-DD"
                    >
                        <List.Item arrow="horizontal">请选择</List.Item>
                    </DatePicker>
                </List>
            </Provider>
        );

    }
    onChange = (value) => {
        this.setState({ value });
    };
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FFFF00',
        color: 'red',
    }

})
