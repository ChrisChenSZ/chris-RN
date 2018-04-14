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

// import Main from './main.js'
// import Demo1 from './demo1.js'
// import Demo2 from './demo2_text_input.js'
import Demo3 from './demo3.js'
import DemoLogin from './demo3_login.js'
// import {Main} from './demo4_lift_es5.js'
// import Main from './demo4_lift_es6.js'
import DefaultTpl from './defaultTpl.js'
import Test1 from './githubDemo01.js'
// var Test1 = require('./githubDemo01.js')
import Test2 from  './githubDemo02-lift.js'
import Test3 from './githubDemo03-bootOut-main'
import Test4 from './githubDemo04-props-main'
import Test5 from './githubDemo05-state-main'
import Test6 from './githubDemo06-state-ref'
import Test8 from './githubDemo08-navigator-main.js'
import Test9 from './githubDemo09-navigator.js'
import Test10 from './githubDemo10-navigator-params.js'
import Test11 from './githubDemo11-navigator-title.js'
import Test12 from './githubDemo12-navigator-title2.js'
import Test13 from './githubDemo13-navigator-rightBtn.js'
/**
 * render 绘制函数
 * 第二步引出继承类
 */
export default class chrisRN extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Test13/>
            </View>

        );
    }
}

// 第四步注册组件
AppRegistry.registerComponent('chrisRN', () => chrisRN);
