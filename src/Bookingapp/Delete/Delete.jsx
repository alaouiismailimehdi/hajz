import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supprimer } from "../store/Flightslice";
import { sup } from "../store/Hotelslice";
import { supp } from "../store/Carsslice";
import './Delete.css';

function Delete() {
    const dt = useSelector(st => st.dbfl.dbflights)
    const db = useSelector(st => st.dbht.dbHotels)
    const dbc = useSelector(st => st.dbCr.dbCars)
    const Dispatch = useDispatch()
    const nav = useNavigate() 
    const txtfl = useRef()
    const txtht = useRef()
    const txtcr =useRef()

    const handelDelete1 = () => {
        let fl = Number(txtfl.current.value)
        if (window.confirm("ARE YOU SURE !!!")) {
            Dispatch(supprimer(fl))
            alert("DELETE WITH SUCCESS!")
            nav("/Flight/")
        }
    }
    const handelDelete2 = () => {
        let ht = Number(txtht.current.value)
        if (window.confirm("ARE YOU SURE !!!")) {
            Dispatch(sup(ht))
            alert("DELETE WITH SUCCESS!")
            nav("/Hotels/")
        }
    }
    const handelDelete3 = () => {
        let cr = Number(txtcr.current.value)
        if (window.confirm("ARE YOU SURE !!!")) {
            Dispatch(supp(cr))
            alert("DELETE WITH SUCCESS!")
            nav("/Cars/")
        }
    }

    return ( <>
        <div className="delete-container">
            <h1 className="delete-title"> Delete Flights : </h1>
            <div className="delete-box">
                <select ref={txtfl} className="delete-select">
                <option value="">--Choose Flights--</option>
                {
                    dt.map((el, i) =>
                        <option key={i} value={el.id} className="delete-option">
                            id:{el.id} - originCity:{el.origin_city} ➔ DestCity:{el.destination_city}
                        </option>
                    )
                }
                </select>
                <button className="delete-btn" onClick={handelDelete1}>Delete</button>
            </div>
        </div>
        <div className="delete-container">
            <h1 className="delete-title"> Delete Hotels : </h1>
            <div className="delete-box">
                <select ref={txtht} className="delete-select">
                    <option value="">--Choose Hotels--</option>
                {
                    db.map((el, i) =>
                        <option key={i} value={el.id} className="delete-option">
                            id:{el.id} - name:{el.name} - city:{el.city}
                        </option>
                    )
                }
                </select>
                <button className="delete-btn" onClick={handelDelete2}>Delete</button>
            </div>
        </div>
        <div className="delete-container">
            <h1 className="delete-title"> Delete Cars : </h1>
            <div className="delete-box">
                <select ref={txtcr} className="delete-select">
                <option value="">--Choose Cars--</option>
                {
                    dbc.map((el, i) =>
                        <option key={i} value={el.id} className="delete-option">
                            id:{el.id} - Model:{el.model} - year:{el.year}
                        </option>
                    )
                }
                </select>
                <button className="delete-btn" onClick={handelDelete3}>Delete</button>
            </div>
        </div>
        </>
    );
}

export default Delete;