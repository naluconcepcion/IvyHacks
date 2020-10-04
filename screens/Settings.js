import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'

import Firebase from '../config/Firebase'

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

export default class Settings extends Component {
  static navigationOptions = {
      title: 'Settings'
  }

  render() {
    return (
      <View
      style={styles.container}>
      <Text style={styles.text}>
      Settings
      </Text>

      <TouchableOpacity
      style={styles.button}>
      <Text style={styles.logout}>Log out</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
    width: '100%',
    height: '100%',
  },
  button: {
    width: '60%',
  },
  logout: {
    padding: 20,
    color: '#F9F9F9',
    textAlign: 'left'
  },
  text: {
    top: '-35%',
    textAlign: 'center',
    color: '#F9F9F9',
    fontFamily: 'Avenir',
    fontSize: 20
  },
})
