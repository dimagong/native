import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import {BATMAN_HOME, BATMAN_DETAILS} from '../routes';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

const Screen2 = () => {
  return (
    //<NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={BATMAN_HOME}
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#f4511e'},
        }}
      />
      <Stack.Screen
        name={BATMAN_DETAILS}
        component={DetailScreen}
        options={{
          headerStyle: {backgroundColor: '#f4511e'},
        }}
      />
    </Stack.Navigator>
    //</NavigationContainer>
  );
};
export default Screen2;

// export default createStackNavigator(
//   {
//     [STARGATE_HOME]: HomeScreen,
//   },
//   {
//     headerMode: 'none',
//   },
// );
