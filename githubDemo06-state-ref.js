import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

import MyComponent from './githubDemo05-state-main'
// // // 方法一
export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 10
        }
    }
    render () {
        return(
            <View style={styles.container}>
                <Text
                onPress={()=> {
                   let val = this.refs.demo.getState()
                   this.setState({
                       size:val
                   })
                }}
                >获得的值是{this.state.size}</Text>
                <MyComponent ref='demo' />
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