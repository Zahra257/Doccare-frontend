import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginCredentials from "../../Modals/login";
import axios from "axios";

export const Login = createAsyncThunk(

  "auth/login",
  async({username, password},{RejectedWithValue, FulfillwithValue}) =>{


    return axios.post(`http://localhost:9000/api/Signin/${username}/pass/${password}`, new loginCredentials(username, password))
    .then((Response) => FulfillwithValue(Response.data))
    .catch((err)=> RejectedWithValue(err.message))
  }
)


const authSlice = createSlice({
  name: "auth",
  initialState: {
    isloading: false,
    userinfo: {},
    Erreur: "",
  },
  reducer: {
    setLoading(state, { payload }) {
      state.isloading = payload;
    },

    clearErrorMsg(state, _) {
      state.Erreur = "";
    },

    logOutInfo(state) {
       
       state.userinfo = {};
       window.localStorage.setItem("token", "");
       window.localStorage.setItem("user","");
       window.localStorage.clear();

    },
  },

  loadingUserSession(state, _){

    if(window.localStorage.getItem("user")){

      state.userinfo.user = JSON.parse(window.localStorage.getItem("user"));
      state.userinfo.jwt = window.localStorage.getItem("token")
    }


  },

  extraReducers : {
  
    [Login.fulfilled] : (state, action) =>{

      state.userinfo = action.payload;
      window.localStorage.setItem("token", action.payload.jwt);
      window.localStorage.setItem("user", JSON.stringify(action.payload.userinfo))
      state.isloading = false;
      state.Erreur = "";

    },

    [Login.rejected]: (state, {payload}) =>{
     
      state.Erreur = payload;
      state.isloading = false;

    },

    [Login.pending] : (state) =>{

      state.isloading = true;
    }

  }
});

export const {setLoading, clearErrorMsg, logOutInfo, loadingUserSession} =authSlice.actions;


export default authSlice.reducer;