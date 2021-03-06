import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";
import PatientsList from "../../Patients/PatientsList";

export const getListPatients = createAsyncThunk(
  "PatientsList/getListPatients",
  async ({ id }, { rejectWithValue, fulfillWithValue }) => {
    return axios
      .get(`http://localhost:9000/api/Doctor/PatientsList/id/${id}`)
      .then((response) => fulfillWithValue(response.data.ListPatient))
      .catch((err) => rejectWithValue(err.data.message));
  }
);

export const AddNewPatient = createAsyncThunk(
  "PatientsList/AddNewPatient",
  async ({ id, newPatient}) => {
    return axios
      .post(`http://localhost:9000/api/Doctor/AddPatient/id/${id}`, newPatient)
      .then((response) =>  isFulfilled(newPatient))
      .catch((err) => rejectWithValue(err.data.message));
  }
);

export const UpdatePatient = createAsyncThunk(
  "PatientsList/UpdatePatient",
  async ({ id, newPatient}, { rejectWithValue, fulfillWithValue }) => {
    console.log(newPatient)
    return axios
      .put(`http://localhost:9000/api/Doctor/UpdatePatient/id/${id}`, newPatient)
      .then((response) =>  fulfillWithValue({ id, newPatient}))
      .catch((err) => rejectWithValue(err.data.message));
  }
);

export const DeletePatient = createAsyncThunk(
  "PatientsList/DeletePatient",
  async ({id}) => {

    return axios
      .put(`http://localhost:9000/api/Doctor/DeletePatient/id/${id}`)
      .then((response) =>  isFulfilled(id))
      .catch((err) => rejectWithValue(err.data.message));
  }
);

const ListPatientsSlice = createSlice({
  name: "PatientsList",
  initialState: {
    List: [],
    Status: null,
    Erreur: "",
  },

  extraReducers: {

    //Delete Patient
    [DeletePatient.pending]: (state, action) => {
      state.Status = "loading";
    },

    [DeletePatient.fulfilled]: (state, action) => {
      
      state.List.filter(item => item.IdPatient !== action.payload.id)
      state.Status = "Success";
      
    },

    [DeletePatient.rejected]: (state, {payload}) => {
      state.Status = "Failed";
      state.Erreur = payload;
    },

    
    
    //Update Patient
    [UpdatePatient.pending]: (state, action) => {
      state.Status = "loading";
    },

    [UpdatePatient.fulfilled]: (state, action) => {

      state.Status = "Success";
      
    },

    [UpdatePatient.rejected]: (state, {payload}) => {
      state.Status = "Failed";
      state.Erreur = payload;
    },
    
    
    //Add Patient
    [AddNewPatient.pending]: (state, action) => {
      state.Status = "loading";
    },

    [AddNewPatient.fulfilled]: (state, action) => {
      state.Status = "Success";
    },

    [AddNewPatient.rejected]: (state, {payload}) => {
      state.Status = "Failed";
      state.Erreur = payload;
    },
    
    // Read Patients List 
    [getListPatients.pending]: (state, action) => {
      state.Status = "Loading";
    },

    [getListPatients.fulfilled]: (state, { payload }) => {
      state.List = payload;
      state.Status = "Success";
    },

    [getListPatients.rejected]: (state, { payload }) => {
      state.Status = "Failed";
      state.Erreur = payload;
    },
  },
});

export default ListPatientsSlice.reducer;
