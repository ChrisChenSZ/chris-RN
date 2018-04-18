import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import React from 'react';

import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./img/icon.png')}
                style={[styles.icon]}
            />
        ),
    };

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="open drawer"
                />
            </View>

        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./img/icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="open drawer"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                    title="DrawerToggle"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyApp = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});

export default class App extends React.Component {
    render() {
        return <MyApp/>;
    }
}