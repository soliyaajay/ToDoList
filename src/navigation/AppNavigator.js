import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash/index';
import Home from '../screens/home/index';
import Add from '../screens/Add/index';

const Stack = createStackNavigator();

class AppNavigator extends React.Component {
   
    render() {
        return (
            <Stack.Navigator screenOptions={{}} initialRouteName={'splash'}>
                <Stack.Screen name='splash' component={Splash} options={{ title: 'Splash', headerShown: false, }} />
                <Stack.Screen name='home' component={Home} options={{ title: 'All Tasks', headerShown: true, }} />
                <Stack.Screen name='add' component={Add} options={{ title: 'Add your Taskd', headerShown: true,headerBackTitle: 'Back' }} />
            </Stack.Navigator>
        );
    }
}


export default AppNavigator;