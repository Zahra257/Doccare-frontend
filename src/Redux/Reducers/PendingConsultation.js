import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListConsultation = createAsyncThunk(
  "PendingConsultation/getListConsultation",
  async ({ id }, { rejectWithValue, fulfillWithValue }) => {
  
    return axios
      .get(`http://localhost:9000/api/Doctor/DashboardList/id/${id}`)
      .then(response => fulfillWithValue(response.data.listCons))
      .catch((err) => rejectWithValue(err.data.message));
  }
);

const ListDashSlice = createSlice({
  name: "PendingConsultation",
  initialState: {
    List: [],
    Status: null,
    Erreur : ""
  },
   
  AddPatient(){

  },
  DeletePatien(){


  },
  extraReducers: {
    [getListConsultation.pending]: (state, action) => {
      state.Status = "Loading";
    },

    [getListConsultation.fulfilled]: (state, {payload}) => {
      state.List = payload;
      state.Status = "Success";
    },
    
    [getListConsultation.rejected]: (state, {payload}) => {
        state.Status = "Failed";
        state.Erreur = payload;
      }
    
  },
});

export default ListDashSlice.reducer