import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const itState ={
    dbflights:[],
    isloading:false,
    err:null
}

export const getflights=createAsyncThunk("flight/getflights",async()=>{
  return await axios.get("http://localhost:8000/dbflights")
          .then(res=>res.data)

})

const Flightslice=createSlice({
    name:"flight",
    initialState:itState,
    reducers:{
        ajouter:(state,action)=>{
            state.dbflights.push(action.payload)
        },
        supprimer:(state,action)=>{
            let pos=state.dbflights.findIndex(e=>e.id===action.payload)
            state.dbflights.splice(pos,1)
        },
        modifer:(st,act)=>{st.dbflights.splice(st.dbflights.findIndex(e=>e.id==act.payload.id),1,act.payload)}
    },
    extraReducers:(builder)=>{
      builder.addCase(getflights.pending,(st)=>{st.isloading=true})
      .addCase(getflights.fulfilled,(st,act)=>{st.isloading=false;st.dbflights=act.payload})
      .addCase(getflights.rejected,(st,act)=>{st.isloading=false;st.err=act.error.message})
  }
})

export default Flightslice.reducer
export const {ajouter,supprimer,modifer}=Flightslice.actions