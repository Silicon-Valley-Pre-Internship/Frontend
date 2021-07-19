import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon } from 'native-base';
import {createTabNavigator} from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import ProfileTab from './AppTabNavigator/ProfileTab';


class MainScreen extends Component{

    static navigationOptions ={
        headerLeft: <Icon name='ios-camera-outline' style={{paddingLeft:10}}/>,
        title: 'OntheLine',
        headerRight: <Icon name='ios-send-outline' style={{paddingRight:10}}/>
    }

    render(){
        return (
            <AppTabNavigator />
        );
    }
}

export default MainScreen;

const AppTabNavigator = createTabNavigator({
    HomeTab:{
        screen: HomeTab
    },
    Search:{
        screen: SearchTab
    },
    AddMedia:{
        screen:AddMediaTab
    },
    Profile:{
        screen: ProfileTab
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android:{
                    backgroundColor:'white'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true,
    }
})


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c2c'
    }
})