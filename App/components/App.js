///**
// * Sample React Native App
// * https://github.com/facebook/react-native
// * @flow
// */
//
//import React, { Component } from 'react';
//import {
//  Platform,
//  StyleSheet,
//  Text,
//  View
//} from 'react-native';
//
//import PropTypes from 'prop-types'; // ES6
////PropTypes = require('prop-types'); // ES5 with npm
//
//const instructions = Platform.select({
//  ios: 'Press Cmd+R to reload,\n' +
//    'Cmd+D or shake for dev menu',
//  android: 'Double tap R on your keyboard to reload,\n' +
//    'Shake or press menu button for dev menu',
//});
//
//export default class App extends Component<{}> {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit App.js
//          Edit
//        </Text>
//
//        <Text>Hello to the Doctor`s Office</Text>
//        <Text style={styles.instructions}>
//          {instructions}
//        </Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//'use strict';
//
//import React, {StyleSheet, View, WebView, Component} from 'react-native';
//import CookieManager from 'react-native-cookies';
//import LoggedIn from './LoggedIn'
//
//// Change these to reflect
//const LOGIN_URL = "http://localhost:3000/login/";
//const HOME_URL = "http://localhost:3000/";
//
//var styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#F5FCFF',
//  }
//});
//
//export default class ReactNativeLogin extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      loggedIn: false,
//      loadedCookie: false
//    };
//  }
//
//  componentWillMount () {
//    CookieManager.get(HOME_URL, (err, cookie) => {
//      let isAuthenticated;
//      // If it differs, change `cookie.remember_me` to whatever the name for your persistent cookie is!!!
//      if (cookie && cookie.hasOwnProperty('remember_me')) {
//        isAuthenticated = true;
//      }
//      else {
//        isAuthenticated = false;
//      }
//
//      this.setState({
//        loggedIn: isAuthenticated,
//        loadedCookie: true
//      });
//    });
//  }
//
//  onNavigationStateChange (navState) {
//    // If we get redirected back to the HOME_URL we know that we are logged in. If your backend does something different than this
//    // change this line.
//    if (navState.url == HOME_URL) {
//      this.setState({
//        loggedIn: true,
//      });
//    }
//  }
//
//  render () {
//    // If we have completed loading the cookie choose to show Login WebView or the LoggedIn component, else just show an empty View.
//    if (this.state.loadedCookie) {
//      if (this.state.loggedIn) {
//        return (
//          <LoggedIn/>
//        );
//      }
//      else {
//        return (
//          <View style={[styles.container]}>
//            <WebView
//              ref={'webview'}
//              automaticallyAdjustContentInsets={false}
//              style={styles.webView}
//              source={{uri: LOGIN_URL}}
//              javaScriptEnabled={true}
//              onNavigationStateChange={this.onNavigationStateChange.bind(this)}
//              startInLoadingState={true}
//              scalesPageToFit={true}
//            />
//          </View>
//        );
//      }
//    }
//    else {
//      return (
//        <View></View>
//      );
//    }
//  }
//}

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { AppRegistry, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
