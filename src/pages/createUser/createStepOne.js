import React from 'react';
import Modal from 'react-native-modal';
import { 
    View, 
    Text
} from 'react-native';

import createUser from '../../styles/createUser';

export default function userStepOne() {
    return (
        <View style={createUser.wrapContent}>
            <View style={createUser.triangleOne}/>
            <View style={createUser.triangleTwo}/>
            <View style={createUser.triangleThree}/>

            <Modal 
                isVisible={true}
                style={createUser.modalStyle}
            >
                <View style={createUser.modalContent}>

                </View>
            </Modal>
            
        </View>
    );
}