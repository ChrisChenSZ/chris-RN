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
    TouchableOpacity
} from 'react-native';

import data from './demo1.json'
/**
 * render 绘制函数
 * 第二步引出继承类
 */
// export default class  extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>helloWorld</Text>
//             </View>
//         );
//     }
// }
export var Main = React.createClass({
    // 第一个函数
    getDefaultProps() {
        console.log('===========1')
        return {
            name:'18',
            sex:'男'
        }
    },
    // 第二个函数
    getInitialState() {
      console.log('===========2')
      return {
          height:180
      }
    },
    render () {
        console.log('===========3')
        return (
        <View style={styles.container}>
            <Text>我的名字叫：{this.props.name + '\n'}</Text>
            <Text>性别是：{this.props.sex + '\n'}</Text>
            <Text>现在的身高是：{this.state.height + '\n'}</Text>
            <TouchableOpacity onPress={() => {
                this._addHieght()
            }}>
                <Text>点我长高1cm</Text>
            </TouchableOpacity>
        </View>

      )
    },
    _addHieght () {
      this.setState({
          height:this.state.height += 1
      })
    },
    componentDidMount() {
        console.log('==============4')
    }
})
// 第三步创建样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#5197ff',
        flexWrap: 'wrap',
    }
});

