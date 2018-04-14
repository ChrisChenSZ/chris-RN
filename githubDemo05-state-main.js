import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'

// 方法一
export default class Test extends Component {
    constructor(props){
        super(props)
        this.state={
            size:50
        }
    }
    getState() {
        return this.state.size
    }
    render () {
        return(
            <View style={styles.container}>
                <Text onPress={() => {
                    this.setState({
                        size:this.state.size + 10
                    })
                }}>点击变大</Text>
                <Text
                    onPress={() => {
                        this.setState({
                            size:this.state.size - 10
                        })
                    }}>点击变小</Text>
                <Image source={require('./img/icon.png')} style={{width:this.state.size,height:this.state.size}}></Image>
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