import React from 'react';
import { 
    View, 
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import logo from '../../assets/images/logo.png';
import loginStyles from '../../styles/loginStyles';

function Login({ navigation }){
    function navigateToCreatUser() {
        navigation.navigate('Create');
    }

    return (
        <View style={loginStyles.wrapContent}>
            <View style={loginStyles.triangleOne}/>
            <View style={loginStyles.triangleTwo}/>
            <View style={loginStyles.triangleThree}/>
            <Image source={ logo } style={loginStyles.logoImage}/>

            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={loginStyles.input}
                placeholder='E-MAIL'
                placeholderTextColor='#FFF'
            />  
            <TextInput
                autoCapitalize='none'
                secureTextEntry={true}
                style={loginStyles.inputPassword}
                placeholder='SENHA'
                placeholderTextColor='#FFF'
            />  

            <View style={loginStyles.wrapSpan}>
                <TouchableOpacity>
                    <Text style={loginStyles.span}>Esqueci minha senha</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={loginStyles.span} onPress={navigateToCreatUser}>Criar conta</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={loginStyles.buttonLogin}>
                <Text style={loginStyles.buttonText}>INICIAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={loginStyles.buttonFacebookLogin}>
                <Text style={loginStyles.buttonFacebookText}>INICIAR COM FACEBOOK</Text>
            </TouchableOpacity>
        </View>
    );
}



export default Login;