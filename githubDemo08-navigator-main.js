import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import {Navigator} from 'react-native-deprecated-custom-components';
import Boy from './githubDemo08-navigator-boy.js'
// // // 方法一
export default class Test extends Component {
    render () {
        return(
            <View style={styles.container}>
                <Navigator
                    initialRoute={{ name: '首页', component: Boy }}
                    //配置场景
                    configureScene=
                        {
                            (route) => {

                                //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，
                                //有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js

                                // return Navigator.SceneConfigs.PushFromRight;
                                return ({
                                    ...Navigator.SceneConfigs.PushFromRight,
                                    gestures: null,
                                });
                            }
                        }
                    renderScene={
                        (route, navigator) => {
                            let Component =route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }
                    } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        marginTop:50,
        backgroundColor:'red'
    }
})