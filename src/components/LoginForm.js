import React, { Component } from 'react';
// import { TextInput } from 'react-native';
// import { TextInput } from 'react-native';

import { Header, Button, Card, CardSection, Input  } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return(
      <Card>
          <CardSection>
            <Input
            label="Email"
            
            value={this.state.text}
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
