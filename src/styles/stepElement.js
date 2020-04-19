import { StyleSheet, PixelRatio } from 'react-native';

const stepElement = StyleSheet.create({
    wrapStep: {
        position: 'relative'
    },
    circleOne: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 35/2,
        backgroundColor: '#BFBCBC',
        marginBottom: 20,
        bottom: 10,
        right: 100
    },
    circleOneDone: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 35/2,
        backgroundColor: '#FD3539',
        marginBottom: 20,
        bottom: 10,
        right: 100
    },
    circleTwo: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 35/2,
        backgroundColor: '#BFBCBC',
        marginBottom: 20,
        bottom: 10,
        left: 100
    },
    circleTwoDone: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 35/2,
        backgroundColor: '#FD3539',
        marginBottom: 20,
        bottom: 10,
        left: 100
    },
    circleThree: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 35/2,
        backgroundColor: '#BFBCBC',
        marginBottom: 20,
        bottom: 10,
        left: -20
    },
    rectangleOne: {
        position: 'absolute',
        width: 130,
        height: 7,
        bottom: 45,
        right: 5,
        backgroundColor: '#BFBCBC',
    },
    rectangleOneDone: {
        position: 'absolute',
        width: 130,
        height: 7,
        bottom: 45,
        right: 5,
        backgroundColor: '#FD3539',
    },
    rectangleTwo: {
        position: 'absolute',
        width: 130,
        height: 7,
        bottom: 45,
        left: 5,
        backgroundColor: '#BFBCBC',
    },
    rectangleTwoDone: {
        position: 'absolute',
        width: 130,
        height: 7,
        bottom: 45,
        left: 5,
        backgroundColor: '#FD3539',
    },
});

export default stepElement;