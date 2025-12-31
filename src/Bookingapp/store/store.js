
import { configureStore } from "@reduxjs/toolkit";
import Flightslice from './Flightslice'
import HotelSlice from "./Hotelslice"
import Carsslice from "./Carsslice"
 const store = configureStore({
  reducer: {
    dbfl:Flightslice,
    dbht:HotelSlice,
    dbCr:Carsslice
  }
})

export default store;
