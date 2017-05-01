import React, { Component } from 'react';
// import { TextInput } from 'react-native';
// import { TextInput } from 'react-native';

import { Header, Button, Card, CardSection, Input  } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return(
      <Card>
          <CardSection>
            <Input
            label="Email"
            placeholder="user@email.com"
            value={this.state.email}
            onChnageText={text => this.setState({ email })}
             />
          </CardSection>

          <CardSection>
            <Input
            label="Password"
            secureTextEntry="true"
            placeholder="Password"
            value={this.state.password}
            onChnageText={text => this.setState({ password })}
             />
          </CardSection>


          <CardSection>
            <Button>
              Log In
            </Button>
          </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
