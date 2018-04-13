/**
 * Created by ydh on 2017/6/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Platform,  // 监测当前项目运行的系统
    TouchableOpacity
} from 'react-native';

let Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

export default class XMGLoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
                <View style={{marginTop:40, marginBottom:30}}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="请输入用户名"
                        clearButtonMode="always"
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="请输入密码"
                        password={true}
                        clearButtonMode="always"
                        underlineColorAndroid="transparent"
                    />
                </View>
                {/*登录按钮*/}
                <TouchableOpacity
                    style={styles.loginBtnStyle}
                    activeOpacity={0.5}
                    onPress={()=>this._login()}
                >
                    <Text style={styles.loginTextStyle}>登录</Text>
                </TouchableOpacity>
                <View style={styles.otherViewStyle}>
                    <TouchableOpacity>
                        <Text style={{color:'orange'}}>无法登录</Text>
                    </TouchableOpacity>
                    <Text style={{color:'orange'}}>新用户</Text>
                </View>
                {/*尾部区域*/}
                <View style={styles.footerViewStyle}>
                    <Text>其它的登录方式:</Text>
                    <Image source={require('./img/icon3.png')} style={styles.otherLoginImgStyle}/>
                    <Image source={require('./img/icon7.png')} style={styles.otherLoginImgStyle}/>
                    <Image source={require('./img/icon8.png')} style={styles.otherLoginImgStyle}/>
                </View>
            </View>
        );
    }

    _login(){
        alert('调用登录!');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',

        // 侧轴居中
        alignItems:'center'
    },

    iconStyle:{
        width:80,
        height:80,
        marginTop: Platform.OS == 'ios' ? screenW * 0.3 : screenW * 0.1,
        borderRadius:40,
        borderColor:'#fff',
        borderWidth:2
    },

    inputStyle:{
        width:screenW,
        height:44,
        backgroundColor:'#fff',
        marginBottom:1,
        textAlign:'center'
    },

    loginBtnStyle:{
        width:screenW * 0.9,
        height:36,
        backgroundColor:'red',
        borderRadius:8,

        // 主轴和侧轴居中
        justifyContent:'center',
        alignItems:'center',

        marginBottom:15
    },

    loginTextStyle:{
        backgroundColor:'rgba(0,0,0,0)',
        fontSize:18,
        color:'#fff'
    },

    otherViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        width:screenW * 0.9,
        // backgroundColor:'red',
        justifyContent:'space-between',
    },

    footerViewStyle:{
        position:'absolute',
        left: 10,
        bottom: 30,

        flexDirection:'row',
        alignItems:'center'
    },

    otherLoginImgStyle:{
        width: 40,
        height:40,
        borderRadius:20,
        margin: 5
    }
});

module.exports = XMGLoginView;