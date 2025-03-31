import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {headerShown: false};

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
