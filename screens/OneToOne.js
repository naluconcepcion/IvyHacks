import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Button } from 'react-native-elements';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Firebase, { db } from '../config/Firebase';

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { getUser } from '../actions/user';

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

  oSend(messages) {
      let x = this.state.messages;
      //console.log(this.state.messages);
      if(this.state.messages == undefined) {
        x = [];
      }
      let y = x.push(messages[0]);
      this.setState({messages: x});


      // set the remote firebase to update messages accordingly
      db.collection("messages").doc(this.state.location).set({
        messages: this.state.messages,
      }).then(() => {
        console.log("successfully added a new message!")
      })
  }

  render() {
    if (this.state.isLoaded) {
        return (
          <View style={styles.container}>
              <View style={styles.top}>
                  <Icon name="chevron-left" size={20} color='#212121'
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.back}
                  />
                  <Image
                    style={styles.tinyLogo}
                    source={require('../assets/images/onetoone.png')}
                  />
              </View>
              <GiftedChat
                messages = { this.state.messages }
                onSend = {messages => this.oSend(messages)}
                user={
                  {
                    _id: this.state.user,
                    name: this.state.name,
                  }
                }
                renderUsernameOnMessage = {true}
                inverted = {false}
                alwaysShowSend = {true}
                //textInputStyle = {{textAlignVertical: 'center', backgroundColor: '#212121', color: 'white', padding: 15, borderRadius: 15,}}
                //style={{backgroundColor: 'red'}}
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
//    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
    width: '100%',
    height: '100%',
  },
  tinyLogo: {
//    position: 'relative',
    width: '60%',
    height: '80%',
    resizeMode: 'contain',
    left: '50%',
  },
  back: {
    color: '#F9F9F9',
    padding: 15,
    width: 40,
//    left: '-20%',
//    backgroundColor: 'blue',
  },
  top: {
    height: '10%',
    alignItems: 'center',
    top: '10%',
    flexDirection: 'row',
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