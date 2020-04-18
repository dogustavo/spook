import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

import login from './pages/login/login';
import createUserStepOne from './pages/createUser/createStepOne';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={login}/>
                <AppStack.Screen name="Create" component={createUserStepOne}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}