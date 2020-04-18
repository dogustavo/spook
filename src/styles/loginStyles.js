import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
    wrapContent: {
        flex: 1,
        position: 'relative',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#040F0F'
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
        alignSelf: 'center'
    },
    input: {
        alignSelf: 'center',
        backgroundColor: '#040F0F', 
        height: 46,
        width: 310,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 7,
        paddingHorizontal: 20,
        borderStyle: 'solid',
        color: '#FFF',
        marginTop: 10
    },
    inputPassword: {
        alignSelf: 'center',
        backgroundColor: '#040F0F', 
        height: 46,
        width: 310,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 7,
        paddingHorizontal: 20,
        borderStyle: 'solid',
        color: '#FFF',
        marginTop: 10
    },
    wrapSpan: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width: 310,
        
    },
    span:{
        color: '#FFF',
        textDecorationLine: 'underline'
    },
    buttonLogin:{
        alignSelf: 'center',
        height: 46,
        width: 310,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 7,
        marginTop: 20,
        backgroundColor: '#FD3539',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,     
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonFacebookLogin: {
        alignSelf: 'center',
        height: 46,
        width: 310,
        borderWidth: 1,
        borderColor: '#FD3539',
        borderRadius: 7,
        marginTop: 10,
        backgroundColor: '#040F0F',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5, 
    },
    buttonFacebookText: {
        color: '#FD3539',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default loginStyles;