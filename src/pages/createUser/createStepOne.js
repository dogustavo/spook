import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { 
    View, 
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import createUser from '../../styles/createUser';
import stepProgress from '../../styles/stepProgress';
import camera from '../../assets/images/take-picture.png';
import storageUser from "../store";


export default function userStepOne({ navigation }) {

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    function SaveImg(){
        storageUser()
    }


    const [isModal, setModal] = useState(true);

    const handleClick = evt => {
        setModal(!isModal);
        navigateToLogin();
    }

    return (
        <View style={createUser.wrapContent}>
            <View style={createUser.triangleOne}/>
            <View style={createUser.triangleTwo}/>
            <View style={createUser.triangleThree}/>

            <Modal 
                isVisible={isModal}
                style={createUser.modalStyle}
            >
                <View style={createUser.modalContent}>
                    <Text style={createUser.modalTitle}>Escolha uma bela foto de peril</Text>
                    <TouchableOpacity style={createUser.cameraOpen} >
                        <Image source={ camera } style={createUser.cameraImage}/>
                    </TouchableOpacity>

                    <View style={createUser.modalFooter}>
                        <TouchableOpacity style={createUser.buttonCancel} >
                            <Text onPress={handleClick} style={createUser.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={createUser.buttonNext} >
                            <Text style={createUser.modalButtonText}>Próximo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            
        </View>
    );
}