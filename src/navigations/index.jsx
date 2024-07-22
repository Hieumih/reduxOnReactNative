// navigaion
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SimpleView from './SimpleView';
import AuthView from './AuthView';
const Stack = createNativeStackNavigator();



const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={
            {
                headerShown: false
            }
        }>
            <Stack.Screen name="Auth" component={AuthView} />
            <Stack.Screen name="Home" component={SimpleView} />
        </Stack.Navigator>
    );
}

export default StackNavigator;