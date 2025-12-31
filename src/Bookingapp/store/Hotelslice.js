import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
const iSt={
    
      dbHotels:[],
      isloading:false,
      err:null
}


export const getHotels=createAsyncThunk("Hotels/getHotels",async()=>{
  return await axios.get("http://localhost:8000/dbHotels")
          .then(res=>res.data)

})

const HotelSlice=createSlice({
    name:"Hotels",
    initialState:iSt,
    reducers:{
        ajt:(st,act)=>{
            st.dbHotels.push(act.payload)
        },
        sup:(st,act)=>{
            let pos=st.dbHotels.findIndex(e=>e.id===act.payload)
            st.dbHotels.splice(pos,1)
        },
        mod:(st,act)=>{st.dbHotels.splice(st.dbHotels.findIndex(e=>e.id==act.payload.id),1,act.payload)}
    },
    extraReducers:(builder)=>{
          builder.addCase(getHotels.pending,(st)=>{st.isloading=true})
          .addCase(getHotels.fulfilled,(st,act)=>{st.isloading=false;st.dbHotels=act.payload})
          .addCase(getHotels.rejected,(st,act)=>{st.isloading=false;st.err=act.error.message})
      }
})
export default HotelSlice.reducer
export const {ajt,sup,mod}=HotelSlice.actions