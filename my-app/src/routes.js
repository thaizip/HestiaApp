

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import Home from './screens/Home';
// import Explorar from './screens/Explorar';
// import Listas from './screens/Listas';
// import Vizualizar from './screens/list/Vizualizar';

// const Drawer = createDrawerNavigator();

// export default function Rotas() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator drawerPosition="right">
//         <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }}/>
//         <Drawer.Screen name="Explorar" component={Explorar} options={{ headerShown: false }}/>
//         <Drawer.Screen name="Listas" component={Listas} options={{ headerShown: false }} />
//         <Drawer.Screen name="Vizalizar" component={Vizualizar} options={{ headerShown: false }} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Explorar from './screens/Explorar';
import Listas from './screens/Listas';
import Visualizar from './screens/list/Visualizar'; // Importe a tela 'Vizualizar' aqui

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Navigator para as telas principais do menu lateral
function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Explorar" component={Explorar} options={{ headerShown: false }} />
      <Drawer.Screen name="Listas" component={Listas} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

// Navigator para navegar para 'Vizualizar'
function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Visualizar" component={Visualizar} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Rotas() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
