import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
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
    },
    input: {
        alignSelf: 'center',
        backgroundColor: '#303036',
        top: 240,
        width: 385,
        height: 50,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 12,
        paddingHorizontal: 30,
        borderStyle: 'solid',
        color: '#FFF'
    }
});

export default loginStyles;