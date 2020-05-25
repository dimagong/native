import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './src/screen1';
import Screen2 from './src/screen2';
import Screen3 from './src/screen3';
import {STARGATE_HOME, BATMAN_HOME, SPIDER_HOME} from './src/routes';
import Ionicons from 'react-native-vector-icons/Ionicons';

//<ion-icon name="videocam-outline"></ion-icon>
const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    console.log('App props', this.props);
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, TintColor}) => {
              let iconName;
              if (route.name === STARGATE_HOME) {
                iconName = focused ? 'ios-add-circle' : 'ios-play';
              } else if (route.name === BATMAN_HOME) {
                iconName = focused ? 'ios-add-circle' : 'ios-play';
              } else if (route.name === SPIDER_HOME) {
                iconName = focused ? 'ios-add-circle' : 'ios-play';
              }
              return <Ionicons name={iconName} size={25} color={TintColor} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          {console.log('TAB props', this.props)}
          <Tab.Screen name={STARGATE_HOME} component={Screen1} />
          <Tab.Screen name={BATMAN_HOME} component={Screen2} />
          <Tab.Screen name={SPIDER_HOME} component={Screen3} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
