import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListAllConsultations = createAsyncThunk(
  "ConsultationsList/getListAllConsultation",
  async ({id}, { rejectWithValue, fulfillWithValue }) => {
  
    return axios
      .get(`http://localhost:9000/api/Doctor/ListConsultation/id/${id}`)
      .then(response => fulfillWithValue(response.data.AllCons))
      .catch((err) => rejectWithValue(err.data.message));
  }
);

const ListConsultationsSlice = createSlice({
  name: "ConsultationsList",
  initialState: {
    List: [],
    Status: null,
    Erreur : ""
  },

  AddPAtient (){
   


  },

  DeletePatient(){


  },
   
  extraReducers: {
    [getListAllConsultations.pending]: (state, action) => {
      state.Status = "Loading";
    },

    [getListAllConsultations.fulfilled]: (state, {payload}) => {
      state.List = payload;
      state.Status = "Success";
    },
    
    [getListAllConsultations.rejected]: (state, {payload}) => {
        state.Status = "Failed";
        state.Erreur = payload;
      }
    
  },
});

export default ListConsultationsSlice.reducer