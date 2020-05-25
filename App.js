import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen1 from './src/screen1';
import Screen2 from './src/screen2';
import Screen3 from './src/screen3';
import {STARGATE_HOME, BATMAN_HOME, SPIDER_HOME} from './src/routes';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BLUE} from './constans';

//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    console.log('App props', this.props);
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={STARGATE_HOME}
          drawerContentOptions={{
            activeTintColor: BLUE,
            contentContainerStyle: {marginVertical: 30},
          }}>
          {console.log('DRAWER props', this.props)}
          <Drawer.Screen
            name={STARGATE_HOME}
            component={Screen1}
            options={{
              drawerLabel: 'STARGATE',
              drawerIcon: ({tintColor}) => (
                <MaterialIcons name="grade" size={24} style={{color: BLUE}} />
              ),
            }}
          />
          <Drawer.Screen
            name={BATMAN_HOME}
            component={Screen2}
            options={{
              drawerLabel: 'BATMAN',
              drawerIcon: () => (
                <MaterialIcons
                  name="favorite"
                  size={24}
                  style={{color: BLUE}}
                />
              ),
            }}
          />
          <Drawer.Screen
            name={SPIDER_HOME}
            component={Screen3}
            options={{
              drawerLabel: 'SPIDER',
              drawerIcon: () => (
                <MaterialIcons name="pets" size={24} style={{color: BLUE}} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

//////                            Tab-NAVIGATION                    ///////
// return (
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused}) => {
//           let iconName;
//           if (route.name === STARGATE_HOME) {
//             iconName = focused ? 'ios-add-circle' : 'ios-play';
//           } else if (route.name === BATMAN_HOME) {
//             iconName = focused ? 'ios-add-circle' : 'ios-play';
//           } else if (route.name === SPIDER_HOME) {
//             iconName = focused ? 'ios-add-circle' : 'ios-play';
//           }
//           return <Ionicons name={iconName} size={25} color={BLUE} />;
//         },
//       })}
//       tabBarOptions={{
//         //activeTintColor: 'tomato',
//         activeTintColor: BLUE,
//         inactiveTintColor: 'gray',
//       }}>
//       {console.log('TAB props', this.props)}
//       <Tab.Screen name={STARGATE_HOME} component={Screen1} />
//       <Tab.Screen name={BATMAN_HOME} component={Screen2} />
//       <Tab.Screen name={SPIDER_HOME} component={Screen3} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );
