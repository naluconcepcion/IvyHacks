import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Button } from 'react-native-elements';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Firebase, { db } from '../config/Firebase';

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { getUser } from '../actions/user';

const DATA = [
    {
        name: 'Srikar',
        icon_uri: 'https://reactnative.dev/img/tiny_logo.png',
        last_message: 'yeah, idk man this pset kills'
    },
    {
        name: 'Grace',
        icon_uri: 'https://cdn.discordapp.com/avatars/247056765877878785/26181ea87dcf1b90055fb6fee5cc9833.png?size=256',
        last_message: 'follow my spotify'
    },
    {
        name: 'Kurt',
        icon_uri: 'https://discord.com/assets/dd4dbc0016779df1378e7812eabaa04d.png',
        last_message: 'school is hard'
    },
//    {
//        name: 'Srikar',
//        icon_uri: 'https://reactnative.dev/img/tiny_logo.png',
//        last_message: 'yeah, idk man this pset kills'
//    },
//    {
//        name: 'Grace',
//        icon_uri: 'https://cdn.discordapp.com/avatars/247056765877878785/26181ea87dcf1b90055fb6fee5cc9833.png?size=256',
//        last_message: 'follow my spotify'
//    },
//    {
//        name: 'Kurt',
//        icon_uri: 'https://discord.com/assets/dd4dbc0016779df1378e7812eabaa04d.png',
//        last_message: 'school is hard'
//    },
//    {
//        name: 'Srikar',
//        icon_uri: 'https://reactnative.dev/img/tiny_logo.png',
//        last_message: 'yeah, idk man this pset kills'
//    },
//    {
//        name: 'Grace',
//        icon_uri: 'https://cdn.discordapp.com/avatars/247056765877878785/26181ea87dcf1b90055fb6fee5cc9833.png?size=256',
//        last_message: 'follow my spotify'
//    },
//    {
//        name: 'Kurt',
//        icon_uri: 'https://discord.com/assets/dd4dbc0016779df1378e7812eabaa04d.png',
//        last_message: 'school is hard'
//    },
];

class OneToOne extends Component {
  static navigationOptions = {
      title: 'OneToOne'
  }

  constructor(props) {
      super(props);
      this.state = {
        messages: [],
        user: null,
        isLoaded: false,
      }
    }

  async componentDidMount() {
    let user = await Firebase.auth().currentUser;
    if(user) {
      this.setState({
        user: user.uid,
        isLoaded: true,
      })
    }
    await this.props.getUser(this.state.user);
    // look here
    this.setState({name: this.props.user.firstName})
  }

  render() {
    if (this.state.isLoaded) {
        const renderItem = ({item}) => (
            <View style={styles.item}>
                <TouchableOpacity style={styles.itemTOpacity}>
                    <Image style={styles.userIcon}
                        source={{uri: item.icon_uri}}
                    />
                    <View style={styles.itemRight}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.lastMessage}>{item.last_message}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
        return (
          <View style={styles.container}>
            <TouchableOpacity style={styles.plusTOpacity}>
              <Image
                style={styles.plus}
                source={require('../assets/images/plus.png')}
              />
            </TouchableOpacity>
              <View style={styles.top}>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../assets/images/onetoone.png')}
                  />
              </View>
              <FlatList style={styles.flatlist}
                  data={DATA}
                  renderItem={renderItem}
                />
          </View>
        );
    } else {
      return(
        null
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
//    justifyContent: 'center',
    backgroundColor: '#212121',
    width: '100%',
    height: '100%',
  },
  tinyLogo: {
//    position: 'relative',
    width: '30%',
    height: '50%',
    resizeMode: 'contain',
//    backgroundColor: 'red',
  },
  plusTOpacity: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 15,
//    backgroundColor: 'red',
  },
  plus: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
//  back: {
//    color: '#F9F9F9',
//    marginLeft: 10,
//    padding: 15,
//    width: 40,
//    left: '-20%',
//    backgroundColor: 'blue',
//  },
  top: {
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
//    backgroundColor: 'red',
  },
  flatlist: {
    width: '100%',
//    backgroundColor: 'grey',
  },
  item: {
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    padding: 5,
//    backgroundColor: 'red',
  },
  itemTOpacity: {
    flexDirection: 'row',
    padding: 10,
//    backgroundColor: 'red',
  },
  userIcon: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    // I don't know why plain old 30 doesn't work, but I'll make it extra high to be safe
    borderRadius: 1000,
//    backgroundColor: 'green',
    marginLeft: 15,
    marginRight: 15,
  },
  itemRight: {
//    justifyContent: 'center',
//    backgroundColor: 'yellow',
  },
  name: {
    color: 'white',
    fontSize: 20,
    marginBottom: 4,
  },
  lastMessage: {
    color: '#ddd',
    fontSize: 12,
    marginBottom: 4,
  },
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser }, dispatch);
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneToOne)