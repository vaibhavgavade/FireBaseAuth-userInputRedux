import {EMAIL_CHANGED} from '../../component/actions/Types';
import {PASS_CHANGED} from '../../component/actions/Types'
import {LOGIN_USER_SUCCESS} from '../../component/actions/Types';
import {LOGIN_SUCCESS} from '../../component/actions/Types';
import {LOGIN_USER_FAIL} from '../../component/actions/Types'
import {LOGIN_USER} from '../../component/actions/Types'
const INITIAL_STATE = {
    email:'',
    password:'',
    user:null,
    error:'',  
    loading:false
}
export default AuthReducer=(state=INITIAL_STATE,action) => {
    console.log(action)
    switch(action.type){
        case EMAIL_CHANGED:{
          return  { ...state,email:action.payload};
        }
        case PASS_CHANGED:{
            return {...state,password:action.payload}
        }
        case LOGIN_USER:{
            return {...state, loading:true,error:''}
        }
        case LOGIN_SUCCESS:{
            return {...state, error:'' }
        }
        case LOGIN_USER_SUCCESS:{
            return{...state,user:action.payload, ...INITIAL_STATE}
        }
        case LOGIN_USER_FAIL:{
                return{...state, error:"Authentication failed", password:'',loading:false}
        }
       default:
            return state;
    }
}