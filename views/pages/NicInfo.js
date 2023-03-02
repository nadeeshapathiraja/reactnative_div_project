import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
// import lankaNIC from 'lanka-nic';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function NicInfo() {
    const [email, setEmail] = useState(undefined);
    return (
        <View>
            <Text>NicInfo</Text>

            <TextInput
                style={styles.input}
                label="Enter Your NIC Number"
                mode='flat'
                value={email}
                onChangeText={emailText => setEmail(emailText)}
            />
            {/* let {dateOfBirth, gender} = lankaNIC.getInfoFromNIC("925182566V"); */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    btn: {
        margin: 20,
        padding: 10,
        borderWidth: 1,
    }
});