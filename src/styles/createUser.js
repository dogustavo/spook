import { StyleSheet } from 'react-native';

const createUser = StyleSheet.create({
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
    modalStyle:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 110,
        height: 550,
        width: 350,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 20,
    },
    modalContent: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
        
    }
});

export default createUser;