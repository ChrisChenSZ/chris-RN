import {StackNavigator} from "react-navigation";
import {
    View,
    Text,
    Button,
    Image
} from 'react-native';
import React from "react";
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./img/icon.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '首页',
        // headerTitle:<LogoTitle/>,
        headerTitleStyle: {
            marginLeft:50,
            // fontWeight: 'bold',
            flex:1,
            textAlign:'center'
        },
    //     headerStyle: {
    //         backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: '900',
    //         fontSize:20
    //     },
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                            giveTitle:'首页传递的标题'
                        });
                    }}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation ,navigationOptions}) => {
        const { params } = navigation.state;

        return {
            title: params ? params.giveTitle : '默认详情页标题',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
            // headerStyle: {
            //     backgroundColor: '#f42a6d',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //     fontWeight: 'bold'
            // }
        }
    };
    render() {
        /* 2. Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="更新标题"
                    onPress={() => this.props.navigation.setParams({giveTitle: '标题更新了!'})}
                />
            </View>
        );
    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
        // mode:'modal',
        headerMode:'screen',
        //全局配置
        navigationOptions: {
            headerRight: (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#f4511e"
                />
            ),
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf:'center'
            },
            headerBackTitle:'后退'
        },
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}