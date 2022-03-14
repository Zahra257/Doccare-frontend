import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListConsultation = createAsyncThunk(
  "PendingConsultation/getListConsultation",
  async ({ id }) => {
    return axios
      .get(`http://localhost:9000/api/Doctor/DashboardList/id/${id}`)
      .then((res) => res.json())
      .catch((err) => console.log(err.message));
  }
);

const ListDashSlice = createSlice({
  name: PendingConsultation,
  initialState: {
    List: [],
    Status: null,
  },

  extraReducers: {
    [getListConsultation.pending]: (state, action) => {
      state.Status = "Loading";
    },

    [getListConsultation.fulfilled]: (state, { payload }) => {
      state.List = payload;
      state.Status = "Success";
    },
    
    [getListConsultation.rejected]: (state, action) => {
        state.Status = "Failed";
      }
    
  },
});
