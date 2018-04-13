import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

import Test1, {name,sex, sum} from './githubDemo03-bootOut'
export default class Test extends Component {
    state = {
        result: 0
    }
    render () {
        return(
            <View style={styles.container}>
                <Test1/>
                <Text>{name}{sex}</Text>
                <Text
                onPress={() => {
                    let result = sum(2,3)
                    this.setState({
                        result:result
                    })
                }}
                >2+3 = {this.state.result}</Text>
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



