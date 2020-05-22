import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import {STARGATE_HOME, STARGATE_DETAILS} from '../routes';

const Stack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={STARGATE_HOME}
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: '#f4511e'},
          }}
        />
        <Stack.Screen
          name={STARGATE_DETAILS}
          component={DetailScreen}
          options={{
            headerStyle: {backgroundColor: '#f4511e'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HomeScreenStack;

// export default createStackNavigator(
//   {
//     [STARGATE_HOME]: HomeScreen,
//   },
//   {
//     headerMode: 'none',
//   },
// );
