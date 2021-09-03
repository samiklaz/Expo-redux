import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/action'

const ComponentB = () => {
    const counter = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <View>
            <Text style={styles.text}>Component B: {counter}</Text>
            <Button title="Add" onPress={() => dispatch(increment(5))} />
            <Button title="Substract" onPress={() => dispatch(decrement())} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    }
})

export default ComponentB
