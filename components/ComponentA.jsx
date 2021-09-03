import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const ComponentA = () => {

    const counter = useSelector(state => state)
    return (
        <View>
            <Text style={styles.text}>Component A: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    }
})

export default ComponentA
