import { StatusBar } from 'expo-status-bar';
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import firebase from '../config/Firebase';

import { Icon, InlineIcon } from '@iconify/react';
import mailboxOpenOutline from '@iconify/icons-mdi/mailbox-open-outline';

import { DrawerActions } from 'react-navigation-drawer';

// redux magic
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUser } from '../actions/user';

// firebase imports
import Firebase, { realtime } from '../config/Firebase';

// styling
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

const mapScale = 0.01;

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      isLoading: true,
    }
  }

  async componentDidMount() {
//     await this.fetchOthersNearby();
    await this.findCoordinates();
  }

  fetchOthersNearby = async () => {
    await this.findCoordinates();
    if(!this.state.isLoading) {
      var query = await realtime.ref(this.state.location).then(function(snapshot) {
        snapshot.forEach(function(childSnapshot){
          console.log(childSnapshot)
          var key = childSnapshot.key;
          var childData=childSnapshot.data();
        })
      })
    }
  }

  // @TODO: async error with position fetch here cauasing unhandled rejection for locationsRef.ref not a function
  findCoordinates = async () => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        const location = [position.coords.latitude, position.coords.longitude];
        this.setState({
          location: location,
          isLoading: false,
        });
      },

    )
  };

  render() {
    if(!this.state.isLoading) {
      return(
        <View style={styles.container}>
          <StatusBar hidden />
        <MapView
        style={styles.mapStyle}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: this.state.location[0],
          longitude: this.state.location[1],
          latitudeDelta: mapScale,
          longitudeDelta: mapScale
        }}
        showsUserLocation={true}
        scrollEnabled={false}
        zoomEnabled={false}
         />
         <TouchableOpacity
         style={styles.icon}
         onPress={() => this.props.navigation.navigate('Settings')}>
         <Image
         source={require('../assets/images/menu.png')}/>
         </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PostMap')}
          style={{justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '85%', backgroundColor: '#B31B1B', height: '10%', width: '55%', borderRadius: 15}}>

        <Text style={styles.jump}>JUMP ON</Text>
        </TouchableOpacity>

        </View>
      );
    }
    else {
      return(
        <View style={styles.container}>
        <Text>Page loading!</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  jump: {
    fontSize: 30,
    lineHeight: 30,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '82%',
    backgroundColor: '#B31B1B',
    height: '7%',
    width: '70%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F9F9F9',
  },
  buttonText: {
    fontFamily: 'Avenir-Medium',
    fontSize: 25,
    lineHeight: 30,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  mailbox: {
    position: 'absolute',
    top: '5%',
    left: '7%'
  },

  // icon styling
  icon: {
    position: 'absolute',
    top: '5%',
    right: '7%',
    color: '#F9F9F9'
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser, }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen)
