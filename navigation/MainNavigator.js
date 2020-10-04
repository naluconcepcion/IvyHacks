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

const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  /* Query the Realtime db to determine all other users in the vicinity. */
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
  return (
    <BottomTab.Navigator
    initialRouteName="Map"
    tabBarOptions={{activeTintColor: '#B31B1B', showLabel: false, style: {backgroundColor: '#212121'}}}>
    <BottomTab.Screen
    name="MapScreen"
    component={Map}
    options={{
      tabBarIcon: ({ color }) => <Entypo name="map" size={30} color={ color } />,
    }}
    />
    <BottomTab.Screen
      name="Friends"
      component={Friends}
      options={{
        tabBarIcon: ({ color }) => <Entypo name="users" size={30} color= { color } />,
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

function MainStackNavigator() {
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

    <MainNavigator.Screen name = "MapScreen"
    component = {
      Map
    }/>

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
        name="Friends"
        component = {Friends}
      />

      <MainNavigator.Screen
        name="OneToOne"
        component = {OneToOne}
      />

      <MainNavigator.Screen
        name="PostMap"
        component = {PostMap}
      />

    </MainNavigator.Navigator>
  );
}
