import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Firebase from '../config/Firebase'

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class PostMap extends Component {
  static navigationOptions = {
      title: 'PostMap'
  }

  render() {
    return (
      <View
      style={styles.container}>

      <View
      style={styles.top}>
      <Icon name="chevron-left" size={20} color='#212121'
        onPress={() => this.props.navigation.navigate('MapScreen')}
        style={styles.back}
      />
      <View
      style={styles.rightIcons}>
      <TouchableOpacity
      title='Mailbox'
      onPress={() => this.props.navigation.navigate('PostMap')}>
      <Image
        style={styles.mailbox}
        source={require('../assets/images/mailbox.png')}
      />
      </TouchableOpacity>

      <TouchableOpacity
      title='Bulletin'
      onPress={() => this.props.navigation.navigate('PostMap')}>
      <Image
        style={styles.bulletin}
        source={require('../assets/images/pin.png')}
      />
      </TouchableOpacity>

      <TouchableOpacity
      title='People'
      onPress={() => this.props.navigation.navigate('PostMap')}>
      <Image
        style={styles.people}
        source={require('../assets/images/whitePeople.png')}
      />
      </TouchableOpacity>
      </View>
      </View>

      <View style={styles.titles}>


      <TouchableOpacity
      title="General"
      style={styles.chat}
      onPress={() => this.props.navigation.navigate('Chat')}
      >
      <Text style={styles.text}>General</Text>
      </TouchableOpacity>

      <TouchableOpacity
      title="Music"
      style={styles.chat}
      onPress={() => this.props.navigation.navigate('PostMap')}
      >
      <Text style={styles.text}>Music</Text>
      </TouchableOpacity>

      <TouchableOpacity
      title="School"
      style={styles.chat}
      onPress={() => this.props.navigation.navigate('PostMap')}
      >
      <Text style={styles.text}>School</Text>
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
    left: '-230%'
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    top: '-40%',
    padding: 30
  },
  rightIcons: {
    flexDirection: 'row',
    left: '25%'
  },
  mailbox: {
    left: '-50%',
    height: 35,
    width: 35
  },
  bulletin: {
    left: '0%',
    height: 35,
    width: 35
  },
  people: {
    left: '50%',
    height: 35,
    width: 35
  },
  titles: {
    alignItems: 'flex-start',
    top: '-20%'
  },
  text: {
    color: '#F9F9F9',
    fontFamily: 'Avenir',
    fontSize: 30,
    textAlign: 'left',
    left: '-10%'
  },
  chat: {
    position: 'relative',
    textAlign: 'left',
    justifyContent: 'center',
    width: '300%',
    padding: 30,
    paddingLeft: 200,
    paddingRight: 200
  },
})
