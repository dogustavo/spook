import React, { useState, Component, useEffect } from 'react';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';

import createUser from '../../styles/createUser';
import camera from '../../assets/images/take-picture.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import stepElement from '../../styles/stepElement';

const userStepOne = ({ }) => {

    const navigation = useNavigation();

    const [image, setImage] = useState(null);
    const [isModal, setModal] = useState(true);
    const [isStep, setStep] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(()=>{
        console.log(nome);
    },[nome])

    const nextStep = () => {
        setStep(isStep + 1);
    }
    const backStep = () => {
        setStep(isStep - 1);
    }
    
    const handleClick = () => {
        setModal(!isModal);
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
                        <TouchableOpacity onPress={ () => {navigation.goBack();  handleClick} } style={createUser.buttonCancel} >
                            <Text style={createUser.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={nextStep} style={createUser.buttonNext} >
                            <Text style={createUser.modalButtonText}>Pŕoximo</Text>
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
                            onChange={e => e.target.value ? setNome(e.target.value) : null}
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
                        <TouchableOpacity onPress={backStep} style={createUser.buttonBack} >
                            <Text style={createUser.modalButtonText}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={nextStep} style={createUser.buttonNext} >
                            <Text style={createUser.modalButtonText}>Pŕoximo</Text>
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
                        <TouchableOpacity onPress={backStep} style={createUser.buttonBack} >
                            <Text style={createUser.modalButtonText}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={nextStep} style={createUser.buttonNext} >
                            <Text style={createUser.modalButtonText}>Salvar</Text>
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
                {   
                    isStep === 0 
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
export default userStepOne;