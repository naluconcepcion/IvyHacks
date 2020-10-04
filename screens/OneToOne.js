import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Firebase from '../config/Firebase'

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class OneToOne extends Component {
  static navigationOptions = {
      title: 'OneToOne'
  }

  render() {
    return (
      <View
      style={styles.container}>
      <View
      style={styles.top}>
      <Icon name="chevron-left" size={20} color='#212121'
        onPress={() => this.props.navigation.navigate('Friends')}
        style={styles.back}
      />
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/onetoone.png')}
      />

      </View>


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
  tinyLogo: {
    position: 'relative',
    width: '40%',
    height: '100%',
    left: '-10%',
  },
  back: {
    color: '#F9F9F9',
    padding: 10,
    width: 40,
    left: '-150%'
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    top: '-80%',
  },
  topWords: {
    color: '#F9F9F9',
    fontSize: 18,
    padding: 25,
  },
  text: {
    color: '#F9F9F9',
    fontFamily: 'Avenir',
    fontSize: 60
  },
})
