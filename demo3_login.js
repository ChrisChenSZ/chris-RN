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
    TextInput,
    TouchableOpacity
} from 'react-native';

// var Dimensions = require('Dimensions')

var {height, width, scale} = Dimensions.get('window');
/**
 * render 绘制函数
 * 第二步引出继承类
 */
export default class  extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./img/icon.png')} style={styles.icon}></Image>
                <View>
                    <TextInput
                        placeholder='请轮入账号'
                        style={[styles.name,styles.margin]}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder='请轮入密码'
                        style={[styles.name, styles.passMargin]}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => alert(11)}
                >
                    <Text style={styles.fontColoc}>登录</Text>
                </TouchableOpacity>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.register}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forget}>
                        <Text>忘记密码</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.smallIconBox}>
                    <Text>分享：</Text>
                    <Image source={require('./img/icon3.png')} style={styles.smallIcon} />
                    <Image source={require('./img/icon7.png')} style={styles.smallIcon}/>
                    <Image source={require('./img/icon8.png')} style={styles.smallIcon}/>
                </View>
            </View>
        );
    }
}
// 第三步创建样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },
    icon:{
        marginTop:30,
        borderRadius:50,
        width:100,
        height:100
    },
    name: {
        borderColor:'#97a8bb',
        borderWidth:1,
        borderRadius:5,
        width:width * 0.7,
        height:40,
        textAlign:'center'

    },
    margin:{
        marginTop:50
    },
    passMargin:{
        marginTop:5
    },
    loginBtn:{
        marginTop:5,
        width:width * 0.5,
        height:40,
        backgroundColor:'skyblue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    fontColoc:{
        color:'white'
    },
    box:{
      width:width,
      height:50,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
    register:{
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center'
    },
    forget:{
        height:50,
        width:60,
        justifyContent:'center',
        alignItems:'center'
    },
    smallIconBox:{
     flexDirection:'row',
     width:width*0.5,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     position:'absolute',
     left:20,
     bottom: 10
    },
    smallIcon:{
        width:50,
        height:50,
        borderRadius:25
    }
});

