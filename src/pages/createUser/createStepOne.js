import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import { 
    View, 
    Text,
    TouchableOpacity,
    Image,
    PushNotificationIOS,
    Button
} from 'react-native';

import createUser from '../../styles/createUser';
import stepProgress from '../../styles/stepProgress';
import camera from '../../assets/images/take-picture.png';
import storageUser from "../store";
import ImagePicker from "react-native-image-picker";



export default function userStepOne({ navigation }) {
    const [image, setImage] = useState(null);

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    const SelectImage = async () =>{
        const options = {
            title: 'Selecione uma Foto',
            customButtons: [{ name: 'fb', title: 'Escolha uma foto da Galeria'}],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
          };

        ImagePicker.launchImageLibrary(options, response => {
            console.log('Response = ', response);
            
            if(response.didCancel){
                console.log("Usuário fechou o selecionador de imagem");
            }else if (response.error){
              console.log(response.error);
            }else if (response.customButton) {
              console.log('Selected: ', response.customButton)
            } else {
              const source = {uri: response.uri };
          
              setImage(source)
            }
          });
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
                    <TouchableOpacity onPress={SelectImage} style={createUser.cameraOpen} >
                        {image ? 
                        <Image 
                            source={image}
                            style={{width: 300, height: 300}}
                        />
                       
                        : 
                        <Image 
                            source={ camera } 
                            style={createUser.cameraImage}
                        />
                        }
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