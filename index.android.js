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

/**
 * render 绘制函数
 * 第二步引出继承类
 */
export default class chrisRN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[{flex:1,height:50,alignSelf:'flex-start'},styles.text1]}>
                    <Text>
                        我是1
                    </Text>
                </View>
                <View style={[{flex:1,height:100,width:50},styles.text2]}>
                    <Text>
                        屏幕宽：{Dimensions.get('window').width + '\n'}
                        屏幕高: {Dimensions.get('window').height + '\n'}
                        屏幕比：{Dimensions.get('window').scale}
                    </Text>
                </View>
                <View style={{flex:1,height:100,width:50}} >
                    {/*<Image source={requirea('./img/img_02.png')} resizeMode='contain' style={{width: 200, height: 200, backgroundColor: 'red'}}/>*/}
                    <Image source={require('./img/img_02.png')} resizeMode='contain' style={{width: 100, height: 60, backgroundColor: 'red'}}/>
                    {/*<Image source={{uri:'img_02.png'}} style={{width: 200, height: 300, backgroundColor: 'blue'}}/>*/}
                </View>
                <View style={{flex:1,height:100,width:50}}>
                    <Image source={{uri:'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4a0a3dd10155b31983f9847573ab8286/503d269759ee3d6db032f61b48166d224e4ade6e.jpg'}} resizeMode='cover' style={{width: 100, height: 60, backgroundColor: 'blue'}}/>
                </View>
                <View style={[{flex:1,height:40,alignSelf:'flex-end'},styles.text3]}>
                    <Text>
                        我是3
                    </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5197ff',
        flexWrap: 'wrap'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    text1: {
        backgroundColor:'blue'
    },
    text2: {
        flexDirection:'row',
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    text3: {
        backgroundColor:'red'
    }
});

// 第四步注册组件
AppRegistry.registerComponent('chrisRN', () => chrisRN);
