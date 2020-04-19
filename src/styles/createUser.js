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
        justifyContent: 'space-between'
    },
    modalTitle: {
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20        
    },
    modalFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 330,
        justifyContent: 'space-around',
        marginBottom: 100
    },
    buttonCancel: {
        width: 110,
        height: 45,
        backgroundColor: '#FD3539',
        borderRadius: 7,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10    
    },
    buttonNext: {
        width: 110,
        height: 45,
        backgroundColor: '#00E673',
        borderRadius: 7,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10  
    },
    buttonBack: {
        width: 110,
        height: 45,
        backgroundColor: '#A39899',
        borderRadius: 7,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10 
    },
    modalButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'normal',
        textTransform: 'uppercase'
    },
    cameraOpen: {
        marginTop: 50
    },
    ButtonImage: {
        position: 'absolute',
        left: 0,
        right: 0,
        
        bottom: 0,
        zIndex: 1,
    },
    Imagem: {
        top: -30,
    },
    input: {
        alignSelf: 'center',
        height: 46,
        width: 310,
        borderWidth: 1,
        borderColor: '#A39899',
        borderRadius: 7,
        paddingHorizontal: 20,
        borderStyle: 'solid',
        color: '#040F0F',
        marginTop: 10
    },
    inputTitle: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
});

export default createUser;