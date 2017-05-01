import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
      authDomain: 'authentication-70a18.firebaseapp.com',
      databaseURL: 'https://authentication-70a18.firebaseio.com',
      storageBucket: 'authentication-70a18.appspot.com',
      messagingSenderId: '682333809338'
    });

// event handler whenver a user signs in or Out
firebase.auth().onAuthStateChanged((user) => {
   if (user) {
     this.setState({ loggedIn: true });
   } else {
     this.setState({ loggedIn: false });
   }
 });
}

renderContent() {
 switch (this.state.loggedIn) {
   case true:
     return (
       <Text>
         Log Out
       </Text>
     );
   case false:
     return <LoginForm />;
   default:
     return <Spinner size="large" />;
 }
}

render() {
 return (
   <View>
     <Header headerText="Authentication" />
     {this.renderContent()}
   </View>
 );
}
}

export default App;
