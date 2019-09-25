//Action creator
import {EMAIL_CHANGED} from './Types';
import {PASS_CHANGED} from './Types';
import firebase from 'firebase'
export const emailChanged=(text)=>{
    return{
        type:EMAIL_CHANGED,
        payload:text
    };
  };


  export const passChanged=(text)=>{
      return{
          type:PASS_CHANGED,
          payload:text
      };
  };

  export const loginUser=({email,password})=>{
      return (dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user=>console.log(user))
      };
  };