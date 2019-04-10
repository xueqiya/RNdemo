/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './page/HomeScreen';
import ButtonScreen from './page/ButtonScreen';
import NavigationScreen from './page/NavigationScreen';
import ActivityIndicatorScreen from './page/ActivityIndicatorScreen';
import ImageScreen from './page/ImageScreen';
import PickerScreen from './page/PickerScreen';
import TextInputScreen from './page/TextInputScreen';

const AppNavigator = createStackNavigator(
    {
        HomeScreen: { screen: HomeScreen },
        ButtonScreen: { screen: ButtonScreen },
        NavigationScreen: { screen: NavigationScreen },
        ActivityIndicatorScreen: { screen: ActivityIndicatorScreen },
        ImageScreen: { screen: ImageScreen },
        PickerScreen: { screen: PickerScreen },
        TextInputScreen: { screen: TextInputScreen }
    }, {
        initialRouteName: 'HomeScreen',
    });

export default createAppContainer(AppNavigator);





