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
import FlexScreen from './page/FlexScreen';
import FetchScreen from './page/FetchScreen'
import BadgeScreen from './page/BadgeScreen';
import DatePickerScreen from './page/DatePickerScreen';
import SwitchScreen from './page/SwitchScreen';
import OtherScreen from './page/OtherScreen';
import AxioScreen from './page/AxiosScreen';
import MobxScreen from './page/mobx/MobxScreen';

const AppNavigator = createStackNavigator(
    {
        HomeScreen: { screen: HomeScreen },
        ButtonScreen: { screen: ButtonScreen },
        NavigationScreen: { screen: NavigationScreen },
        ActivityIndicatorScreen: { screen: ActivityIndicatorScreen },
        ImageScreen: { screen: ImageScreen },
        PickerScreen: { screen: PickerScreen },
        TextInputScreen: { screen: TextInputScreen },
        FlexScreen: { screen: FlexScreen },
        FetchScreen: { screen: FetchScreen },
        BadgeScreen: { screen: BadgeScreen },
        DatePickerScreen: { screen: DatePickerScreen },
        SwitchScreen: { screen: SwitchScreen },
        OtherScreen: { screen: OtherScreen },
        AxioScreen: { screen: AxioScreen },
        MobxScreen: { screen: MobxScreen }
    }, {
        initialRouteName: 'HomeScreen',
    });

export default createAppContainer(AppNavigator);





