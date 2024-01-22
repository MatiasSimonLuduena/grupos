import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Drawer from './Drawer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Drawer}
          options={() => ({ headerShown: false })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}