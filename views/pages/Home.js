import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import RoundedBtn from '../components/RoundedBtn';
export default function Home() {
    return (
        // <View style={{ flex: 1, flexDirection: 'column', padding: 10, justifyContent: 'center', }}>
        //     <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
        //         <View style={{ flex: 1 }}>

        //             <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
        //                 style={styles.stretch}
        //             />
        //         </View>
        //         <View style={{ flex: 1 }}>
        //             <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry </Text>
        //         </View>

        //     </View>
        //     <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
        //         <View style={{ flex: 1 }}>
        //             <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
        //                 style={styles.stretch2}
        //             />
        //         </View>
        //         <View style={{ flex: 1, }}>
        //             <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
        //                 style={styles.stretch2}
        //             />
        //         </View>
        //         <View style={{ flex: 1 }}>
        //             <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
        //                 style={styles.stretch2}
        //             />
        //         </View>
        //     </View>
        //     <View style={{ flex: 1 }}>
        //         <TextInput
        //             label="Student Address"
        //             mode='outlined'
        //             style={styles.txtInput}
        //             onChangeText={text => setText(text)}
        //         />
        //         <TextInput
        //             label="Student Course"
        //             mode='outlined'
        //             style={styles.txtInput}
        //             onChangeText={text => setText(text)}
        //         />


        //         <Button mode="contained" style={styles.btn} onPress={() => console.log('Pressed')}>
        //             Register
        //         </Button>
        //     </View>
        //     <View style={{ flex: 1 }}>
        //         <View style={styles.roundedBtn}>
        //             <RoundedBtn />
        //         </View>
        //         <View style={styles.roundedBtn}>
        //             <RoundedBtn />
        //         </View>
        //     </View>



        // </View>

        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: 'green' }} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
    },
    main: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
    },
    txtInput: {
        // width: '90%',
        marginBottom: '5%',
        borderRadius: 20,
        width: '100%',
    },
    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
    stretch2: {

        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
    roundedBtn: {
        flex: 1,
        padding: 10,
    }
});