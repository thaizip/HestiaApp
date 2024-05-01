import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'

// const TabDrawer = createDrawerNavigator();
const TabStack = createStackNavigator();

import Index from './screens/Index';
import Login from './screens/access/Login';
import Cadastro from './screens/access/Cadastro';
import Home from './screens/Home';
import Explorar from './screens/Explorar'
import Vizualizar from './screens/list/Vizualizar';

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
        {/* em primeiro apenas para não precisar ficar navegando enquanto desenvolve */}
        <TabStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <TabStack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <TabStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <TabStack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <TabStack.Screen name="Explorar" component={Explorar} options={{ headerShown: false }} />
        <TabStack.Screen name="Vizualizar" component={Vizualizar} options={{ headerShown: false }} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}