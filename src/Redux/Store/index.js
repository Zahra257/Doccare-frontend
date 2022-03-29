import {configureStore, combineReducers} from '@reduxjs/toolkit'
import authReducer from '../Reducers/auth';
import DashListReducer from '../Reducers/PendingConsultation'
import ListPatientReducer from '../Reducers/Patients'
import ListConsultationReducer from '../Reducers/ListConsultation'
import ListAssistantesReducer from '../Reducers/Assistante'

const store = configureStore({ 

    reducer : {

        SigninR : authReducer,
        DashList : DashListReducer,
        ListPatients : ListPatientReducer,   
        ListConsultation : ListConsultationReducer,
        ListAssistantes : ListAssistantesReducer   

    }

})

export default store;

