import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

import LocationInfo from '../screens/LocationInfo'
import Map from '../screens/Map'
import Chat from '../components/Chat'
import Profile from '../components/Profile'
import Mailbox from '../screens/Mailbox'
import Friends from '../screens/Friends'
import OneToOne from '../screens/OneToOne'
import PostMap from '../screens/PostMap'
import Settings from '../screens/Settings'

import {
  Ionicons
} from '@expo/vector-icons';
import {
  Entypo
} from '@expo/vector-icons';
import {
  AntDesign
} from '@expo/vector-icons';
import {
  FontAwesome
} from '@expo/vector-icons';
import {
  FontAwesome5
} from '@expo/vector-icons';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator
} from '@react-navigation/stack';

import {
  createSwitchNavigator
} from 'react-navigation'

import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from 'react-navigation';

// const Drawer = createDrawerNavigator();
//
// /* Query the Realtime db to determine all other users in the vicinity. */
// return (
//   <Drawer.Navigator
//   initialRouteName="Map"
//   screenOptions={
//     {
//       headerShown: false,
//     }
//   }
//   drawerType={"right"}
//   drawerPosition={'right'}
//   drawerBackgroundColor={'#F9F9F9'}>
//     <Drawer.Screen name="Map" component={Map}/>
//     <Drawer.Screen name="Mailbox" component={Mailbox}/>
//     <Drawer.Screen name="Stranger Profile" component={Profile}/>
//     <Drawer.Screen name="Chat" component={MainStackNavigator}/>
//   </Drawer.Navigator>
// );

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
    initialRouteName="Map"
    tabBarOptions={{activeTintColor: '#B31B1B', showLabel: false, style: {backgroundColor: '#212121'}}}>
    <BottomTab.Screen
      name="Friends"
      component={Friends}
      options={{
        tabBarIcon: ({ color }) => <Entypo name="users" size={30} color= { color } />,
      }}
      />

      <BottomTab.Screen
      name="Map"
      component={MainStackNavigator}
      options={{
        tabBarIcon: ({ color }) => <Entypo name="map" size={30} color={ color } />,
      }}
      />

      <BottomTab.Screen
      name="OneToOne"
      component={OneToOne}
      options={{
        tabBarIcon: ({ color }) => <FontAwesome name="paper-plane" size={30} color={ color } />,
      }}
      />
      </BottomTab.Navigator>
    );
}


const MainNavigator = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainNavigator.Navigator initialRouteName = "Map"
    screenOptions = {
      {
        headerShown: false
      }
    }>

    <MainNavigator.Screen name = "Location"
    component = {
      LocationInfo
    }/>

    <MainNavigator.Screen name = "Map"
    component = {Map}
    />

    <MainNavigator.Screen name = "Chat"
    component = {
      Chat
    }/>

    <MainNavigator.Screen name = "Mailbox"
    component = {
      Mailbox
    }/>

    <MainNavigator.Screen
      name="Profile"
      component = {Profile}
    />

    <MainNavigator.Screen
      name="PostMap"
      component = {PostMap}
    />

    <MainNavigator.Screen
      name="Settings"
      component = {Settings}
    />

    </MainNavigator.Navigator>
  );
}
