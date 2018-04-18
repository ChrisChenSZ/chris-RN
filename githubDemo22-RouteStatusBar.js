import React from 'react';
import {Text, View, StatusBar, Button, Platform, StyleSheet} from 'react-native';
import {TabBarBottom, TabNavigator,SafeAreaView} from 'react-navigation';

let isAndroid = Platform.OS == 'android'

class HomeScreen extends React.Component {
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            isAndroid && StatusBar.setBackgroundColor('#6a51ae');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Text style={[styles.paragraph, { color: '#fff' }]}>
                    Light Screen
                </Text>
                <Button
                    title="Next screen"
                    onPress={() => this.props.navigation.navigate('Screen2')}
                    color={isAndroid ? "blue" : "#fff"}
                />
            </SafeAreaView>
        );
    }
}

class SettingsScreen extends React.Component {
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            isAndroid && StatusBar.setBackgroundColor('#ecf0f1');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
                {/*<StatusBar*/}
                    {/*barStyle="dark-content"*/}
                    {/*backgroundColor="#ecf0f1"*/}
                {/*/>*/}
                <Text style={styles.paragraph}>
                    Dark Screen
                </Text>
                <Button
                    title="Next screen"
                    onPress={() => this.props.navigation.navigate('Screen1')}
                />
            </SafeAreaView>
        );
    }
}

export default TabNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
},{
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray'},
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
    }
})