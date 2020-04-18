import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { 
    View, 
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import createUser from '../../styles/createUser';
import camera from '../../assets/images/take-picture.png';


export default function userStepOne({ navigation }) {
    const [isModal, setModal] = useState(true);

    const handleClick = () => {
        setModal(!isModal);
        navigateToLogin();
    }

    function navigateToLogin() {
        navigation.navigate('Login');
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
                <ProgressSteps
                    progressBarColor={'#FD3539'}
                    activeStepIconBorderColor={'#FD3539'}
                    completedStepIconColor={'#FD3539'}
                    labelColor={'#FD3539'}
                    activeLabelColor={'#FD3539'}
                >
                    <ProgressStep 
                        label="Câmera"
                        removeBtnRow={true}
                    >
                        <View>
                            <View style={createUser.modalContent}>
                                <TouchableOpacity style={createUser.cameraOpen} >
                                    <Image source={ camera } style={createUser.cameraImage}/>
                                </TouchableOpacity>
                                <Text style={createUser.modalTitle}>Escolha uma bela foto de peril</Text>

                                <View style={createUser.modalFooter}>
                                    <TouchableOpacity style={createUser.buttonCancel} >
                                        <Text onPress={handleClick} style={createUser.modalButtonText}>Cancelar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={createUser.buttonNext} >
                                        <Text style={createUser.modalButtonText}>Próximo</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ProgressStep>

                    <ProgressStep label="Cadastro">
                        <View>
                        </View>
                    </ProgressStep>

                    <ProgressStep label="Cadastro">
                        <View>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
                
            </Modal>
            
        </View>
    );
}