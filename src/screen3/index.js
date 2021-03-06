import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import {SPIDER_HOME, SPIDER_DETAILS, STARGATE_HOME} from '../routes';
import StarGateHomeScreen from '../screen1/HomeScreen';

const Stack = createStackNavigator();

const Screen3 = () => {
  return (
    //<NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={SPIDER_HOME}
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#f4511e'},
        }}
      />
      <Stack.Screen
        name={SPIDER_DETAILS}
        component={DetailScreen}
        options={{
          headerStyle: {backgroundColor: '#f4511e'},
        }}
      />
      <Stack.Screen
        name={STARGATE_HOME}
        component={StarGateHomeScreen}
        options={{
          headerStyle: {backgroundColor: '#f4511e'},
        }}
      />
    </Stack.Navigator>
    //</NavigationContainer>
  );
};
export default Screen3;
