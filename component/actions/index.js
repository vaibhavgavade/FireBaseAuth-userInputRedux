//Action creator in react native 
//this is action creator
import {EMAIL_CHANGED} from './Types';
import {PASS_CHANGED} from './Types';
import {LOGIN_USER_SUCCESS} from './Types'
import {LOGIN_USER_FAIL} from './Types'
import {LOGIN_USER} from './Types';
import {Actions} from 'react-native-router-flux'
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
           dispatch({type:LOGIN_USER})
        firebase.auth().signInWithEmailAndPassword(email,password)
         .then(user=>
        //     dispatch({type:LOGIN_USER_SUCCESS, payload:user}))
                loginUserSucess(dispatch,user))
        .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password )
                .then(user=>
                    // dispatch({type:LOGIN_USER_SUCCESS,payload:user})}
               loginUserSucess(dispatch,user))
                    .catch(()=>loginUserFail(dispatch))
        })
       }
    }

        const loginUserFail=(dispatch)=>{
            dispatch({type:LOGIN_USER_FAIL})

        }

    const loginUserSucess=(dispatch,user)=>{
        dispatch({
            type:LOGIN_USER_SUCCESS,
            payload:user
        });
        console.log("vaibhav gavade is calling as navigate screen in the emplyee screen")
        Actions.employee();

    };