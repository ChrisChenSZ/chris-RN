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
                {this.getImage()}
            </View>
        );
    }
    getImage () {
        let arr = []
        data.forEach((val, index) => {
            arr.push(
                <View key={index} style={styles.box}>
                    <Image source={{uri:val.imgUrl}} style={styles.img}></Image>
                    <Text>{val.title}111</Text>
                </View>
            )
        })
        return arr
    }
}
// 第三步创建样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#5197ff',
        flexWrap: 'wrap',
    },
    box:{
        backgroundColor:'red',
        width:100,
        height:90,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:50,
        height:50
    }
});

