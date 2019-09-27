import React,{Component} from 'react';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/Index';
import LoginForm from '../component/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router'

class App extends Component {
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyCN64A_iihWc0hq7UtGcCCylv8hZKf2TW4",
            authDomain: "manager-1432f.firebaseapp.com",
            databaseURL: "https://manager-1432f.firebaseio.com",
            projectId: "manager-1432f",
            storageBucket: "",
            messagingSenderId: "1066289052885",
            appId: "1:1066289052885:web:428eacaf77d8937cef365c",
            measurementId: "G-ZQVZBZ0GFT"
          };
         firebase.initializeApp(firebaseConfig);
    }
    render(){
     const store=createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return(
            <Provider store={store}>
                <Router/>
            </Provider>
         
        )
    }
}
export default App;
