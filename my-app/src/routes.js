import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'

// const TabDrawer = createDrawerNavigator();
const TabStack = createStackNavigator();

import Index from './screens/Index';
import Login from './screens/access/Login';
import Cadastro from './screens/access/Cadastro';
import Home from './screens/Home';

export default function Rotas() {

  return (
    <NavigationContainer>
      <TabStack.Navigator  
        screenOptions={{
          drawerPosition: 'right',
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <TabStack.Screen name="Index" component={Index} options={{headerShown: false}}/>
        <TabStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <TabStack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
        <TabStack.Screen name="Home" component={Home} options={{headerShown: false}}/>

      </TabStack.Navigator>
    </NavigationContainer>
  );
}