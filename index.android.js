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
   import Demo1 from './demo1.js'
//    import Demo2 from './demo2_text_input.js'
import DemoLogin from './demo3_login.js'
import TestImage from './githubDemo07-img'
import Test9 from './githubDemo09-navigator'
import Test12 from './githubDemo12-navigator-title2'
import Test13 from './githubDemo13-navigator-rightBtn'
import Test14 from './githubDemo14-navigator-modalScreen'
import App from './index.app'
/**
 * render 绘制函数
 * 第二步引出继承类
 */
export default class chrisRN extends Component {
    render() {
        return (
           <App/>
        );
    }
}

// 第四步注册组件
AppRegistry.registerComponent('chrisRN', () => chrisRN);
