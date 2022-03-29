import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListAssistantes = createAsyncThunk(
  "AssistantesList/getListAssistante",
  async ({id}, { rejectWithValue, fulfillWithValue }) => {
  
    return axios
      .get(`http://localhost:9000/api/Doctor/AssistanteList/id/${id}`)
      .then(response => fulfillWithValue(response.data.ListAssistante))
      .catch((err) => rejectWithValue(err.data.message));
  }
);

const ListAssistantesSlice = createSlice({
  name: "AssistantesList",
  initialState: {
    List: [],
    Status: null,
    Erreur : ""
  },
   
  extraReducers: {
    [getListAssistantes.pending]: (state, action) => {
      state.Status = "Loading";
    },

    [getListAssistantes.fulfilled]: (state, {payload}) => {
      state.List = payload;
      state.Status = "Success";
    },
    
    [getListAssistantes.rejected]: (state, {payload}) => {
        state.Status = "Failed";
        state.Erreur = payload;
      }
    
  },
});

export default ListAssistantesSlice.reducer