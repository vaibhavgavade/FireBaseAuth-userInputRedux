import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './common/Card';
import Header from '../component/common/Header'
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import {connect} from 'react-redux';
import {emailChanged} from './actions/index';
import {passChanged} from './actions/index';
class LoginForm extends Component {
    onEmailChange=(text)=>{
            this.props.emailChanged(text)
    }
    onPassChanged=(text)=>{
        this.props.passChanged(text)
        
    }
  

  render() {
    return (
       
        
    <Card>
      
      <Header textHeader="FireBase"/>
      
    <CardSection>
            <Input label="Email" 
            placeholder="vaibhav0413@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
            />
        </CardSection>

        <CardSection>
            <Input
            secureTextEntry
            label="Password"
            placeholder="Enter your password"
            onChangeText={this.onPassChanged}
            value={this.props.password}
            />
        </CardSection>
        <CardSection>
            <Button>
                Login
            </Button>
        </CardSection>
    </Card>
    );
  }
}

const mapStateToProps =state=>{
    return {
        email:state.auth,
        password:state.auth
    };
};
export default connect(mapStateToProps,{emailChanged,passChanged})(LoginForm);
