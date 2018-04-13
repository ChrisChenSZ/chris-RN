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
    Dimensions, //获取屏幕组件
    Image, //图片组件
    TextInput
} from 'react-native';

import data from './demo1.json'
/**
 * render 绘制函数
 * 第二步引出继承类
 */
export default class  extends Component {
    render() {
        return (
            <View style={[styles.container,{alignItems: 'center',justifyContent: 'center'}]}>
                {/*<Text>helloWorld</Text>*/}
                <View style={styles.input}>
                    <TextInput
                        style={[styles.input,{ borderColor: 'gray', borderWidth: 1}]}
                        underlineColorAndroid="transparent"
                        clearButtonMode='unless-editing'
                        // value="我是默认的文字"
                        keyboardType="web-search"
                        multiline={true}
                        secureTextEntry= {true}
                        placeholder="提示文字"
                        placeholderTextColor= 'blue'
                        // clearButtonMode="unless-editing"
                    />
                </View>
            </View>
        );
    }
}
// 第三步创建样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#5197ff',
        // flexWrap: 'wrap',
    },
    input:{
        width:80,
        height:50,
        backgroundColor:'red',
        padding:0
    }
});

