import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image 
} from 'react-native';

import logo from '../assets/images/Logo.png';

function Login(){
    return (
        <View style={styles.wrapContent}>
            <View style={styles.triangleOne}/>
            <View style={styles.triangleTwo}/>
            <View style={styles.triangleThree}/>
            <Image source={ logo } style={styles.logoImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapContent: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#303036'
    },
    triangleOne: {
        position: 'absolute',
        top: 20,
        right: -60,
        width: 120,
        height: 120,
        backgroundColor: '#FD3539',
        transform: [
            {rotate: '45deg'}
        ]
    },
    triangleTwo: {
        position: 'absolute',
        top: 300,
        left: -60,
        width: 120,
        height: 120,
        backgroundColor: '#FD3539',
        transform: [
            {rotate: '45deg'}
        ]
    },
    triangleThree: {
        position: 'absolute',
        bottom: -100,
        right: -150,
        width: 200,
        height: 200,
        backgroundColor: '#FD3539',
        transform: [
            {rotate: '130deg'}
        ]
    },
    logoImage: {
        width: 190,
        alignSelf: 'center',
        top: 110
    }
})

export default Login;