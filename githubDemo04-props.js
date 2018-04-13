import React, { Component, PropTypes } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'


export default class Test extends Component {
    static defaultProps = {
        name: '小红'
    }
    static  propTypes = {
        name: PropTypes.string.isRequired
    }
    render () {
        return(
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
                <Text>{this.props.age}</Text>
                <Text>{this.props.sex}</Text>
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