import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

// // // 方法一
// export default class Test extends Component {
//     render () {
//         return(
//             <View style={styles.container}>
//                 <Text>测试</Text>
//             </View>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         alignItems:'center',
//         marginTop:50
//     }
// })


//方法二
var Test = React.createClass({
    render () {
        return (<Text style={styles.container}>测试</Text>)

    }
})

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        marginTop:50
    }
})

module.exports = Test;
