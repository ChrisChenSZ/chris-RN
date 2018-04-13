import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

import MyComponent from './githubDemo04-props'
// // // 方法一
export default class Test extends Component {
    render () {
        let params={name:'小米',age:18,sex:'男'}
        let {name,age} = params
        return(
            <View style={styles.container}>
                <Text></Text>
                {/*<MyComponent*/}
                {/*//     name={params.name}*/}
                {/*//     age={params.age}*/}
                {/*//     sex={params.sex}*/}
                {/*// />*/}
                <MyComponent {...params}/>
                <MyComponent name={name} age={age}/>
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