import {  useEffect, useRef, useState } from "react";
import "./ADD.css";
import { ajouter , modifer} from "../store/Flightslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function ADD() {
  const [btn,setbtn]=useState("Ajouter")
  const [etat,setetat]=useState(false)
  const {id}=useParams()
  const [fl,setfl]=useState({id: "",origin_city:"",destination_city: "",departure_date: "",return_date: "",price: "",airline: "",logo: "",flight_number: "",duration: "",stops: "",class: "",luggage:"",departure_time: "",arrival_time: ""})
  const Dispatch = useDispatch();
  const nav = useNavigate();
  const dbbf=useSelector(st=>st.dbfl.dbflights)
useEffect( function(){
  if(id){
    setbtn("Update");
    setetat(true);
    let l=dbbf.find(fl=>fl.id==Number(id));
    setfl(l)
  }
},[id, dbbf])

  const formtxt = useRef();
  const idtxt = useRef();
  const OCtxt = useRef();
  const DCtxt = useRef();
  const DDtxt = useRef();
  const RDtxt = useRef();
  const PRtxt = useRef();
  const ALtxt = useRef();
  const FNtxt = useRef();
  const DRTtxt = useRef();
  const STtxt = useRef();
  const CLtxt = useRef();
  const LUGtxt = useRef();
  const DTtxt = useRef();
  const ATtxt = useRef();

  const handelUpdate = () => {
    const vl = {
      id: Number(idtxt.current.value),
      origin_city: OCtxt.current.value,
      destination_city: DCtxt.current.value,
      departure_date: DDtxt.current.value,
      return_date: RDtxt.current.value,
      price: Number(PRtxt.current.value),
      airline: ALtxt.current.value,
      flight_number: FNtxt.current.value,
      duration: DRTtxt.current.value,
      stops: STtxt.current.value,
      class: CLtxt.current.value,
      luggage: LUGtxt.current.value,
      departure_time: DTtxt.current.value,
      arrival_time: ATtxt.current.value,
    };
    if(btn=="Ajouter"){
      Dispatch(ajouter(vl));
      alert("Ajouter avec succes");
       nav("/flight")
    }
      else{
        Dispatch(modifer(vl));
        alert("Modifier avec success") 
        nav("/flight")
        
      }
    
  };

  return (
    <div className="add-container">
      <h1 className="h">ADD FLIGHT</h1>
      <form className="flight-form" ref={formtxt}>
        <div className="Fg">
          <label>ID:</label>
          <input type="text"  defaultValue={fl.id} ref={idtxt} readOnly={etat} placeholder="e.g. 111" />
        </div>
        <div className="Fg">
          <label>Origin City:</label>
          <input type="text" defaultValue={fl.origin_city} ref={OCtxt} placeholder="Casablanca" />
        </div>
        <div className="Fg">
          <label>Destination City:</label>
          <input type="text" defaultValue={fl.destination_city} ref={DCtxt} placeholder="Paris" />
        </div>
        <div className="Fg">
          <label>Departure Date:</label>
          <input type="date" defaultValue={fl.departure_date} ref={DDtxt} />
        </div>
        <div className="Fg">
          <label>Return Date:</label>
          <input type="date" defaultValue={fl.return_date} ref={RDtxt} />
        </div>
        <div className="Fg">
          <label>Price (DH):</label>
          <input type="number" defaultValue={fl.price} ref={PRtxt} />
        </div>
        <div className="Fg">
          <label>Airline:</label>
          <input type="text" defaultValue={fl.airline} ref={ALtxt} />
        </div>
        <div className="Fg">
          <label>Flight Number:</label>
          <input type="text" defaultValue={fl.flight_number} ref={FNtxt} />
        </div>
        <div className="Fg">
          <label>Duration:</label>
          <input type="text" defaultValue={fl.duration} ref={DRTtxt} />
        </div>
        <div className="Fg">
          <label>Stops:</label>
          <input type="text" defaultValue={fl.stops} ref={STtxt} />
        </div>
        <div className="Fg">
          <label>Class:</label>
          <input type="text" defaultValue={fl.class} ref={CLtxt} />
        </div>
        <div className="Fg">
          <label>Luggage:</label>
          <input type="text" defaultValue={fl.luggage} ref={LUGtxt} />
        </div>
        <div className="Fg">
          <label>Departure Time:</label>
          <input type="text" defaultValue={fl.departure_time} ref={DTtxt} placeholder="08:30 AM" />
        </div>
        <div className="form-group">
          <label>Arrival Time:</label>
          <input type="text" defaultValue={fl.arrival_time} ref={ATtxt} placeholder="12:45 PM" />
        </div>

        <input
          type="button"
          className="submit-btn"
          onClick={handelUpdate}
          value={btn}
        />
      </form>
    </div>
  );
}

export default ADD;
