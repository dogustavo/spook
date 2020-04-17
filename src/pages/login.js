import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Login(){
    return (
        <View style={styles.wrapContent}>
            <Text style={styles.text}>Alisson funcionou!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default Login;