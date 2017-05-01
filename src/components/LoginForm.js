import React, { Component } from 'react';
// import { TextInput } from 'react-native';
// import { TextInput } from 'react-native';

import { Header, Button, Card, CardSection, Input  } from './common';

class LoginForm extends Component {
  state = { email: '' };

  render() {
    return(
      <Card>
          <CardSection>
            <Input
            label="Email"
            placehold="user@email.com"
            value={this.state.email}
            onChnageText={text => this.setState({ text })}
            style={{ height: 40, width: 100 }} />
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
