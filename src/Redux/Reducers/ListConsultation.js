import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListConsultations = createAsyncThunk(
  "ConsultationsList/getConsultations",
  async ({id}, { rejectWithValue, fulfillWithValue }) => {
  
    return axios
      .get(`http://localhost:9000/api/Doctor/PatientsList/id/${id}`)
      .then(response => fulfillWithValue(response.data.ListPatient))
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
   
  extraReducers: {
    [getListConsultations.pending]: (state, action) => {
      state.Status = "Loading";
    },

    [getListConsultations.fulfilled]: (state, {payload}) => {
      state.List = payload;
      state.Status = "Success";
    },
    
    [getListConsultations.rejected]: (state, {payload}) => {
        state.Status = "Failed";
        state.Erreur = payload;
      }
    
  },
});

export default ListConsultationsSlice.reducer