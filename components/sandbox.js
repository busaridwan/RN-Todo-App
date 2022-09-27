import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class sandbox extends Component {
  render() {
    return (
        <View styles={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({

    container: {
                flex: 1,
                marginTop: 300,
                backgroundColor: '#ddd',
                flexDirection: 'row'
            },
            boxOne:{
                backgroundColor: 'violet',
                padding: 10
            },
            boxTwo:{
                backgroundColor: 'gold',
                padding: 10
            },
            boxThree:{
                backgroundColor: 'coral',
                padding: 10
            }
})