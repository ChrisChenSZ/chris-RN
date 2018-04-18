import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    Text,
    Platform,
    View,
} from 'react-native';
import { StackNavigator, SwitchNavigator,SafeAreaView } from 'react-navigation';

let isAndroid = Platform.OS == 'android'


// 主要控制顶部状态栏
class Screen1 extends React.Component {
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

class Screen2 extends React.Component {
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#ecf0f1"
                />
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

export default StackNavigator({
    Screen1: {
        screen: Screen1,
    },
    Screen2: {
        screen: Screen2,
    },
}, {
    headerMode: 'none',
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
    }
})