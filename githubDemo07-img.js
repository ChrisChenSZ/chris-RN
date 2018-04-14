import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'

// // // 方法一
export default class Test extends Component {
    render () {
        return(
            <View style={styles.container}>
                <Text>测试</Text>
                <Image source={require('./img/icon.png')} ></Image>
                <Image source={{uri:'icon'}} style={{width:100,height:100,backgroundColor:'red'}} resizeMode={'stretch'}></Image>
                <Image source={{uri:'https://www.baidu.com/img/bd_logo1.png'}} style={{width:100,height:100}}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        marginTop:50
    }
})