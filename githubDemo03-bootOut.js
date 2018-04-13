import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

const name = '小明'
const sex = '男'
const sum = function (a,b) {
    return a + b
}
export {name, sex, sum}

export default class Test extends Component {
    render () {
        return(
            <View style={styles.container}>
                <Text>导出</Text>
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