import React, { useState, Component } from 'react';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';

import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Button,

} from 'react-native';

import { connect } from 'react-redux';

import createUser from '../../styles/createUser';
import camera from '../../assets/images/take-picture.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import stepElement from '../../styles/stepElement';

import { authSigup } from '../../ducks/auth'; 

class createUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            errors: {},
            fields: {
                avatar: '',
                name: '',
                age: '',
                email: '',
                password: ''
            }
        };
    }
}

export default function userStepOne({ navigation }) {
    const [image, setImage] = useState(null);
    const [isModal, setModal] = useState(true);
    const [isStep, setStep] = useState(0);

    const nextStep = async () => {
        await setStep(isStep + 1);
    }
    const backStep = async () => {
        await setStep(isStep - 1);
    }
    
    // function clearImage() {
    //     setImage(null)
    // }

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    const handleClick = async () => {
        await setModal(!isModal);
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
            const source = {uri: response.uri };
        
            setImage(source)
        });
    }

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    function modalStepOne() {
        return (
            <View>
                <View style={createUser.modalContent}>
                    <Text style={createUser.modalTitle}>Escolha uma bela foto de peril</Text>
                    <TouchableOpacity onPress={SelectImage} style={createUser.cameraOpen} >
                        {image != null ? 
                        (<>
                        <View style={createUser.Imagem}>
                            <Image 
                                source={image}
                                style={{width: 300, height: 300}}
                            />
                            <View style={createUser.ButtonImage}>
                                <Button 
                                    title="Remover" 
                                    onPress={() => {setImage(null)}} 
                                />
                            </View>
                        </View>
                        </>)
                        : 
                        <View style={createUser.Imagem}>
                            <Image 
                                source={ camera } 
                                style={createUser.cameraImage}
                            />
                        </View>
                        }
                    </TouchableOpacity>
                    <View style={createUser.modalFooter}>
                        <TouchableOpacity style={createUser.buttonCancel} >
                            <Text onPress={handleClick ? navigateToLogin : ''} style={createUser.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={createUser.buttonNext} >
                            <Text onPress={nextStep} style={createUser.modalButtonText}>Pŕoximo</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        );
    }

    function modalStepTwo() {
        return (
            <View>
                <View style={createUser.modalContent}>
                    <Text style={createUser.modalTitle}>Adicione seus dados pessoais</Text>
                    <View styler={createUser.WrapForm}>
                        <Text style={createUser.inputTitle}>Nome *</Text>
                        <TextInput 
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={createUser.input}
                            placeholderTextColor='#A39899'
                        />  
                    </View>
                    <View styler={createUser.WrapForm}>
                        <Text style={createUser.inputTitle}>E-mail *</Text>
                        <TextInput 
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={createUser.input}
                            placeholderTextColor='#A39899'
                        />  
                    </View>
                    <View styler={createUser.WrapForm}>
                        <Text style={createUser.inputTitle}>Data de nascimento *</Text>
                            <TextInput
                                keyboardType='numeric'
                                autoCapitalize='none'
                                autoCorrect={false}
                                style={createUser.input}
                                placeholderTextColor='#A39899'
                            /> 
                    </View>
                    <View style={createUser.modalFooter}>
                        <TouchableOpacity style={createUser.buttonBack} >
                            <Text onPress={backStep} style={createUser.modalButtonText}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={createUser.buttonNext} >
                            <Text onPress={nextStep} style={createUser.modalButtonText}>Pŕoximo</Text>
                        </TouchableOpacity>
                    </View>
  
                </View>
            </View>
        );
    }

    function modalStepThree() {
        return (
            <View>
                <View style={createUser.modalContent}>
                    <Text style={createUser.modalTitle}>Test</Text>
                    
                    <View style={createUser.modalFooter}>
                        <TouchableOpacity style={createUser.buttonBack} >
                            <Text onPress={backStep} style={createUser.modalButtonText}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={createUser.buttonNext} >
                            <Text onPress={nextStep} style={createUser.modalButtonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    function progressBar() {
        return (
            <View style={stepElement.wrapStep}>
                <View style={ stepElement.circleOneDone }/>
                <View style={ isStep === 0 ? stepElement.rectangleOne : stepElement.rectangleOneDone }/>
                <View style={ isStep >= 1 ? stepElement.circleThreeDone : stepElement.circleThree }/>
                <View style={ isStep === 2 ? stepElement.rectangleTwoDone : stepElement.rectangleTwo }/>
                <View style={ isStep === 2 ? stepElement.circleTwoDone : stepElement.circleTwo }/>
            </View>
        );
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
                {   isStep === 0 
                    ? modalStepOne()
                    : isStep === 1
                    ? modalStepTwo()
                    : modalStepThree()
                }

                { progressBar() }
 
            </Modal>
            
        </View>
    );
}