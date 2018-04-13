/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry, // 注册组件
    StyleSheet,  // 样式组件
    Text,  //文本组件
    View, //视图组件
    Dimensions,
    Image
} from 'react-native';

import data from './demo1.json'
/**
 * render 绘制函数
 * 第二步引出继承类
 */
export default class  extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Text>通用模版</Text>
            </View>
        );
    }
}
// 第三步创建样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: '10'
    }
});

