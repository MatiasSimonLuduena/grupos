import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';

// components
import Home from './components/Home';
import Perfil from "./components/Perfil";
import Pagos from "./components/Pagos";
import Historial from "./components/Historial";
import Notificaciones from "./components/Notificaciones";
import Soporte from "./components/Soporte";

const DrawerN = createDrawerNavigator();

export default function Drawer() {
    const array = [
        { name: 'INICIO', component: Home, icon: 'home' },
        { name: 'PERFIL', component: Perfil, icon: 'user-alt' },
        { name: 'PAGOS', component: Pagos, icon: 'money-bill-wave' },
        { name: 'HISTORIAL', component: Historial, icon: 'history' },
        { name: 'NOTIFICACIONES', component: Notificaciones, icon: 'bell' },
        { name: 'SOPORTE', component: Soporte, icon: 'question' },
    ];
    
    return (
        <DrawerN.Navigator initialRouteName="INICIO">
            {array.map((item) => (
                <DrawerN.Screen
                    key={item.name}
                    name={item.name}
                    component={item.component}
                    options={{
                        headerStyle: {
                        backgroundColor: '#3f8880',
                        },
                        headerTintColor: 'white',
                        drawerIcon: ({ focused }) => (
                        <FontAwesome5
                            name={item.icon}
                            size={20}
                            color={focused ? '#3f8880' : 'black'}
                        />
                        ),
                        drawerActiveTintColor: '#3f8880',
                    }}
                />
            ))}
        </DrawerN.Navigator>
    );
}