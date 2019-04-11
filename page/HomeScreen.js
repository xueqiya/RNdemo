/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ToastAndroid, RefreshControl, DrawerLayoutAndroid, FlatList, Alert, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '控件列表',
    };
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    render() {
        return (
            <DrawerLayoutAndroid
                //宽度
                drawerWidth={300}
                //从左侧出
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                //侧滑View视图
                renderNavigationView={this.navigationView}
                //打开是调用
                onDrawerOpen={() => this.onDrawerOpen()}
                //关闭时调用
                onDrawerClose={() => this.onDrawerClose()}>
                <FlatList
                    data={[
                        { key: '0.Button' },
                        { key: '1.Alert' },
                        { key: '2.Navigation' },
                        { key: '3.ActivityIndicatorScreen' },
                        { key: '4.ImageScreen' },
                        { key: '5.Picker' },
                        { key: '6.Text&TextInput' },
                        { key: '7.Alert' },
                        { key: '8.Alert' },
                        { key: '9.Alert' },
                        { key: '10.Alert' }
                    ]}
                    renderItem={({ item, index }) =>
                        <Text
                            onPress={() => this.onItemPress(index)}
                            style={styles.tit}>{item.key}
                        </Text>
                    }
                    ItemSeparatorComponent={() =>
                        <View
                            style={styles.line}>
                        </View>
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}>
                        </RefreshControl>
                    }
                ></FlatList >
            </DrawerLayoutAndroid>
        );
    }

    //DrawerLayout视图
    navigationView() {
        return (
            <View style={{ flex: 1, backgroundColor: '#d1d0d4' }}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
                <Text>7</Text>
            </View>
        )
    }

    itemView = (item, index) => {
        <Text
            onPress={() => this.onItemPress(index)}
            style={styles.tit}>{item.key}
        </Text>
    }

    onItemPress = (index) => {
        switch (index) {
            case 0:
                this.props.navigation.push('ButtonScreen');
                break;
            case 1:
                Alert.alert('我是对话框');
                break;
            case 2:
                this.props.navigation.push('NavigationScreen',{
                    id: 123,
                    str: '要传递的',
                });
                break;
            case 3:
                this.props.navigation.push('ActivityIndicatorScreen');
                break
            case 4:
                this.props.navigation.push('ImageScreen');
                break
            case 5:
                this.props.navigation.push('PickerScreen');
                break
            case 6:
                this.props.navigation.push('TextInputScreen');
                break
        };
    }

    onDrawerOpen() {
        alert('open')
    }
    onDrawerClose() {
        alert('close')
    }
    onRefresh = () => {
        ToastAndroid.show('已刷新', ToastAndroid.SHORT);
        this.state.refreshing = true
    }
};

const styles = StyleSheet.create({
    tit: {
        height: 40,
        textAlign: 'left',
        fontSize: 20,
        marginLeft: 20,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: "#d1d0d4"
    },
});