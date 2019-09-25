import {EMAIL_CHANGED} from '../../component/actions/Types';
import {PASS_CHANGED} from '../../component/actions/Types'
const INITIAL_STATE = {email:'',password:''}
export default AuthReducer=(state=INITIAL_STATE,action) => {
    switch(action.type){
        case EMAIL_CHANGED:{
          return  { ...state,email:action.payload};
        }
        case PASS_CHANGED:{
            return {...state,password:action.payload}
        }
        default:
            return state;
    }
}