import React from 'react';
import { 
    View, 
    Image,
    TextInput 
} from 'react-native';

import logo from '../assets/images/Logo.png';
import loginStyles from './loginStyles'

function Login(){
    return (
        <View style={loginStyles.wrapContent}>
            <View style={loginStyles.triangleOne}/>
            <View style={loginStyles.triangleTwo}/>
            <View style={loginStyles.triangleThree}/>
            <Image source={ logo } style={loginStyles.logoImage}/>

            <TextInput 
                style={loginStyles.input}
                placeholder='E-MAIL'
                placeholderTextColor='#FFF'
            />  
        </View>
    );
}



export default Login;