import OpeningScreen from '../screens/OpeningScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import Friends from '../screens/Friends'
import OneToOne from '../screens/OneToOne'
import PostMap from '../screens/PostMap'

// import TabOneScreen from '../screens/TabOneScreen'
// import TabTwoScreen from '../screens/TabTwoScreen'
// import TabThreeScreen from '../screens/TabThreeScreen'
// import TabFourScreen from '../screens/TabFourScreen'
// import TabFiveScreen from '../screens/TabFiveScreen'

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Opening"
      screenOptions={{
        headerShown: false
      }}
    >
    <AuthStack.Screen
      name="Opening"
      component = {OpeningScreen}
    />
    <AuthStack.Screen
        name="Login"
        component = {LoginScreen}
      />
      <AuthStack.Screen
        name="Signup"
        component = {SignupScreen}
      />

      <AuthStack.Screen
        name="Friends"
        component = {Friends}
      />

      <AuthStack.Screen
        name="OneToOne"
        component = {OneToOne}
      />

      <AuthStack.Screen
        name="PostMap"
        component = {PostMap}
      />

    </AuthStack.Navigator>
  );
}
