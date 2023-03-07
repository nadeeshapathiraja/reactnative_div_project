import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';

export default function Login({ navigation }) {
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const onLogin = () => {
        console.log('Email is: ' + email);
    }

    const [inputDate, setInputDate] = useState(undefined)

    return (

        <View>

            <TextInput
                style={styles.input}
                label="Enter Your Email"
                mode='flat'
                value={email}
                onChangeText={emailText => setEmail(emailText)}
            />

            <TextInput
                style={styles.input}
                label="Enter Your Password"
                value={password}
                mode='flat'
                onChangeText={passwordText => setPassword(passwordText)}
            />

            <DatePickerInput
                locale="en"
                label="Birthdate"
                value={inputDate}
                onChange={(d) => setInputDate(d)}
                inputMode="start"
            />

            <Button icon="camera" mode="contained" style={styles.btn} onPress={() => navigation.navigate('Home')}>
                Press me
            </Button>
        </View>





    )
};

const styles = StyleSheet.create({
    input: {
        height: 60,
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