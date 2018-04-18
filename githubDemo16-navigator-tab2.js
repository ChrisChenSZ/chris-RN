// import Ionicons from 'react-native-vector-icons/Ionicons.js';
import Ionicons from './assets/Iconfont';

import { TabNavigator, TabBarBottom } from 'react-navigation';

import React from 'react';

import { Text, View } from 'react-native';

import Test9 from './githubDemo09-navigator.js'
import Test11 from './githubDemo11-navigator-title.js'

class Club extends React.Component {
    render() {
        return (
            <Test9/>
        );
    }
}

class Activity extends React.Component {
    render() {
        return (
            <Test11/>
        );
    }
}
class Topic extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Topic!</Text>
            </View>
        );
    }
}
class My extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>My!</Text>
            </View>
        );
    }
}
export default TabNavigator(
    {
        '社团': {screen: Club },
        '活动': { screen: Activity },
        '话题': { screen: Topic },
        '我的': { screen: My},
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === '社团') {

                    // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    iconName = `qizi`;

                } else if (routeName === '活动') {

                    // iconName = `ios-options${focused ? '' : '-outline'}`;
                    iconName = `jiangbei`;

                } else if(routeName === '话题'){

                    iconName = `huati`;

                } else if(routeName === '我的') {

                    iconName = `wode`;

                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    }
);