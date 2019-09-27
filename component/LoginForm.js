import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native'
import Card from './common/Card';
import Header from '../component/common/Header'
import CardSection from './common/CardSection';
import {Spinner} from './common/Spinner';
import Input from './common/Input';
import Button from './common/Button';
import {connect} from 'react-redux';
import {emailChanged} from './actions/index';
import {loginUser} from './actions/index'
import {passChanged} from './actions/index';

class LoginForm extends Component {
    onEmailChange=(text)=>{
            this.props.emailChanged(text)
    }
    onPassChanged=(text)=>{
        this.props.passChanged(text)
        
    }
    onButtonPress=()=>{
      const {email,password}=this.props
        this.props.loginUser({email,password})
       
    }
    renderError(){
        if(this.props.error){
            return(
                <View >
                    <Text style={Styles.textStyles}>{this.props.error}</Text>
                </View>
            )
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        return(
            <Button onPress={this.onButtonPress}>
            Login
            </Button>
        )
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
        {this.renderError()}
        <CardSection>
                
        
        {this.renderButton()}
        </CardSection>
       
           
    </Card>
    );
  }
}

const mapStateToProps =({Auth})=>{
    const {email,password,error,loading}=Auth;
    return {email,password,error,loading};
}
   
    
export default connect(mapStateToProps,{emailChanged,passChanged,loginUser})(LoginForm);
const Styles=StyleSheet.create({
    textStyles:{
        fontSize: 20,
        alignSelf:'center',
        color:'red'
    }
})