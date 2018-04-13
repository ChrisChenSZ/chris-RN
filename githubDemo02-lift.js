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
import MyComponent from './githubDemo02-lift-component'

/**
 * render 绘制函数
 * 第二步引出继承类
 */
export default class extends Component {

    componentWillMount() {
        console.log('componentWillMount;')
    }

    componentDidMount () {
        console.log('componentDidMount')
    }

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps ')
      return true
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate ')
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        return true

    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        return true
    }

    constructor(props) {
        super(props)
        this.state = {
            remove:null
        }
    }
    render() {
        console.log('render')
        let view = this.state.remove ? null : <MyComponent/>;
        let text = this.state.remove ? '复活' : '消失';
        return (
            <View style={styles.container}>
               <Text
               onPress={() => {
                   this.setState({
                       remove:!this.state.remove
                   })
               }}
               >点击</Text>
                <Text>
                    {text}
                </Text>
                {view}
            </View>
        );
    }
}
// 第三步创建样式类
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        marginTop:50
    }
})


