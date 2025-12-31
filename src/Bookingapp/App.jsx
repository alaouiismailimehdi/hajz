import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Flight from "./Flights/Flight";
import Details from "./Flights/Details";
import ADD from "./Flights/ADD";
import Home from "./Home/Home";
import Delete from "./Delete/Delete";
import Hotels from "./Hotels/Hotels";
import DetailsHt from "./Hotels/DetailsHt";
import ADDHT from "./Hotels/ADDHT";
import Cars from "./Cars/Cars";
import DetailCars from "./Cars/DetailCars";
import ADDCARS from "./Cars/ADDCARS";
import Footer from "./Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getflights } from "./store/Flightslice";
import { getHotels } from "./store/Hotelslice";
import { getCars } from "./store/Carsslice";

function APP() {
  
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getflights());
        dispatch(getHotels());
        dispatch(getCars());},[dispatch])
  return (
    <BrowserRouter>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Delete" element={<Delete />} />

                                <Route path="/Flight">
                                <Route index element={<Flight />}  />
                                <Route path="Details/:id" element={<Details />} />                               
                                <Route path="ADD" element={<ADD />} />
                                <Route path="ADD/:id" element={<ADD />} />
                                </Route>


          
                                <Route path="/Hotels">
                                <Route index element={<Hotels />}/>
                                <Route path="DetailsHt/:id" element={<DetailsHt />}/>                               
                                <Route path="/Hotels/ADDHT" element={<ADDHT />} />
                                <Route path="/Hotels/ADDHT/:id" element={<ADDHT />} />
                                </Route>




                                <Route path="/Cars"> 
                                <Route index element={<Cars />} />
                                <Route path="DetailCars/:id" element={<DetailCars />} />
                                <Route path="ADDCARS" element={<ADDCARS />} />
                                <Route path="ADDCARS/:id" element={<ADDCARS />} />
                                </Route>
                                
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default APP;
