import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function RoundedBtn(props) {
    return (
        <TouchableOpacity style={{ backgroundColor: 'red', width: 100, height: 100, borderRadius: 100, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={styles.textStyle}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        color: 'white',
    },

});