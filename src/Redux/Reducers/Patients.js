import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListPatients = createAsyncThunk(
  "PatientsList/getListPatients",
  async ({id}, { rejectWithValue, fulfillWithValue }) => {
  
    return axios
      .get(`http://localhost:9000/api/Doctor/PatientsList/id/${id}`)
      .then(response => fulfillWithValue(response.data.ListPatient))
      .catch((err) => rejectWithValue(err.data.message));
  }
);

const ListPatientsSlice = createSlice({
  name: "PatientsList",
  initialState: {
    List: [],
    Status: null,
    Erreur : ""
  },
   
  extraReducers: {
    [getListPatients.pending]: (state, action) => {
      state.Status = "Loading";
    },

    [getListPatients.fulfilled]: (state, {payload}) => {
      state.List = payload;
      state.Status = "Success";
    },
    
    [getListPatients.rejected]: (state, {payload}) => {
        state.Status = "Failed";
        state.Erreur = payload;
      }
    
  },
});

export default ListPatientsSlice.reducer