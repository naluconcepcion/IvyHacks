import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Firebase from '../config/Firebase'

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class Friends extends Component {
  static navigationOptions = {
      title: 'Friends'
  }

  render() {
    return (
      <View
      style={styles.container}>
      <View
      style={styles.top}>
      <Icon name="chevron-left" size={20} color='#212121'
        onPress={() => this.props.navigation.navigate('Opening')}
        style={styles.back}
      />
      <TouchableOpacity
      title='Online'
      onPress={() => this.props.navigation.navigate('Friends')}>
      <Text style={styles.topWords}>
      Online
      </Text>
      </TouchableOpacity>

      <TouchableOpacity
      title='Requests'
      onPress={() => this.props.navigation.navigate('Friends')}>
      <Text style={styles.topWords}>
      Requests
      </Text>
      </TouchableOpacity>

      <TouchableOpacity
      title='All'
      onPress={() => this.props.navigation.navigate('OneToOne')}>
      <Text style={styles.topWords}>
      All
      </Text>
      </TouchableOpacity>

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
  back: {
    color: '#F9F9F9',
    padding: 10,
    width: 40,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    top: '-90%',
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
