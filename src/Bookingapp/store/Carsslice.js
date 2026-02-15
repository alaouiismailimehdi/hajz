import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
const ist={
    dbCars: [],
    isloading:false,
    err:null
}

export const getCars=createAsyncThunk("Cars/getCars",async()=>{
  return await axios.get("/data/booking.json")
          .then(res=>res.data.dbCars)

})

const Carsslice=createSlice({
    name:"Cars",
    initialState:ist,
    reducers:{
        ajo:(st,act)=>{st.dbCars.push(act.payload)},
        supp:(st,act)=>{st.dbCars.splice(st.dbCars.findIndex(el=>el.id==act.payload.id),1)},
        modf:(st,act)=>{st.dbCars.splice(st.dbCars.findIndex(el=>el.id==act.payload.id),1,act.payload)}
    },
    extraReducers:(builder)=>{
      builder.addCase(getCars.pending,(st)=>{st.isloading=true})
      .addCase(getCars.fulfilled,(st,act)=>{st.isloading=false;st.dbCars=act.payload})
      .addCase(getCars.rejected,(st,act)=>{st.isloading=false;st.err=act.error.message})
  }
})
export default Carsslice.reducer

export const{ajo,supp,modf}=Carsslice.actions
