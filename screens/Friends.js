import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';

import OneToOne from '../screens/OneToOne'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Firebase from '../config/Firebase'

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DATA = [
    {
        name: 'Srikar',
        icon_uri: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
        name: 'Grace',
        icon_uri: 'https://cdn.discordapp.com/avatars/247056765877878785/26181ea87dcf1b90055fb6fee5cc9833.png?size=256',
    },
    {
        name: 'Kurt',
        icon_uri: 'https://discord.com/assets/dd4dbc0016779df1378e7812eabaa04d.png',
    },
];

export default class Friends extends Component {
  static navigationOptions = {
      title: 'Friends'
  }
  handleChangeOnline = () => {
    this.setState({
      screen: "online"
    })
  }
  handleChangeRequests = () => {
    this.setState({
      screen: "requests"
    })
  }

  render() {
    const renderItem = ({item}) => (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Image style={styles.userIcon}
                    source={{uri: item.icon_uri}}
                />
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.itemRight}>
                <Image style={styles.messages}
                    source={require('../assets/images/messages2.png')}
                />
            </View>
        </View>
    );
    return (
      <View style={styles.container}>
          <View style={styles.top}>

          <TouchableOpacity
          title='Online'
          onPress={() => this.handleChangeOnline()}>
          <Text style={[styles.topWords, styles.active]}>
          Online
          </Text>
          </TouchableOpacity>

          <TouchableOpacity
          title='Requests'
          onPress={() => this.handleChangeRequests()}>
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
          <FlatList style={styles.flatlist}
            data={DATA}
            renderItem={renderItem}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'center',
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
    justifyContent: 'space-around',
    marginBottom: 15,
//    backgroundColor: 'red',
  },
  topWords: {
    color: '#F9F9F9',
    fontSize: 18,
    padding: 5,
  },
  active: {
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  text: {
    color: '#F9F9F9',
    fontFamily: 'Avenir',
    fontSize: 60
  },
  flatlist: {
    width: '100%',
//    backgroundColor: 'grey',
  },
  item: {
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  itemRight: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  userIcon: {
    resizeMode: 'contain',
    width: 45,
    height: 45,
    borderRadius: 40,
//    backgroundColor: 'green',
    marginLeft: 15,
    marginRight: 15,
  },
  name: {
    color: 'white',
    fontSize: 18,
    marginLeft: 6,
  },
  messages: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
//    backgroundColor: 'green',
    marginRight: 20,
  }
})
