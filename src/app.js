import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';

import LoginForm from './components/LoginForm';

class App extends Component {
  ComponentWillMount(){
      firebase.initializeApp({
    apiKey: "AIzaSyDyLCcGUO5pWRpLUAoswONEZhwQ8iW0t1I",
    authDomain: "authentication-18257.firebaseapp.com",
    databaseURL: "https://authentication-18257.firebaseio.com",
    projectId: "authentication-18257",
    storageBucket: "authentication-18257.appspot.com",
    messagingSenderId: "1086509504112"
  });
  }
  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          <LoginForm />
          <Text> An App!  </Text>
        </View>
    );
  }
}
export default App;
