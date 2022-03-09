import {configureStore, combineReducers} from '@reduxjs/toolkit'
import auth from '../Reducers/auth';

const store = configureStore({ 

    reducer : combineReducers({

        SigninR : auth
    })

})

export default store;

