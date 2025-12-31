import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ajt } from "../store/Hotelslice";
import { mod } from "../store/Hotelslice";
import "./ADDHT.css";
function ADDHT() {
    const db=useSelector(st=>st.dbht.dbHotels)
    const Dispatch=useDispatch()
    const nav=useNavigate()
    const {id}=useParams()
    const [nv,setnv]=useState({ id: "", name: "", city: "", price_per_night:"", image: "",rating: "",description: "",amenities: [""],category: "",rooms_available:"",breakfast:""})
    const [btn,setbtn]=useState("Ajouter")
    const [etat,setetat]=useState(false)
    useEffect(function(){
        if(id && db.length ){
            setbtn("Modifier")
            setetat("true")
            let l=db.find(f=>f.id==Number(id))
            setnv(l)
        }
    },[id,db])

    const txtid=useRef()
    const txtnm=useRef()
    const txtct=useRef()
    const txtpr=useRef()
    const txtimg=useRef()
    const txtrt=useRef()
    const txtdc=useRef()
    const txtamt=useRef()
    const txtcat=useRef()
    const txtra=useRef()
    const txtbk=useRef()

    const handelUpdate=()=>{
        let v={
            id: txtid.current.value, 
          name: txtnm.current.value, 
          city: txtct.current.value, 
          price_per_night:txtpr.current.value, 
          image: txtimg.current.files[0]?.name || nv.image, 
          rating: txtrt.current.value,
          description: txtdc.current.value,
          amenities: [txtamt.current.value],
          category: txtcat.current.value,
          rooms_available:txtra.current.value,
          breakfast:txtbk.current.value
        }
        if(btn=="Ajouter"){
            Dispatch(ajt(v))
            alert("ajouter avec success")
            nav("/Hotels")
        }else{
            Dispatch(mod(v))
            alert("Modifier avec success")
            nav("/Hotels")
        }
    }

    return (
        <div className="admin-page-container">
            <div className="form-wrapper">
                <h2 className="form-title">{btn} un Hôtel</h2>
                
               
                <div className="hotel-admin-form" key={nv.id}>
                    <div className="form-grid">
                        <div className="input-box">
                            <label>ID de l'hôtel</label>
                            <input defaultValue={nv.id} ref={txtid} readOnly={etat} type="text" placeholder="Ex: 201" />
                        </div>

                        <div className="input-box">
                            <label>Nom de l'hôtel</label>
                            <input defaultValue={nv.name} ref={txtnm} type="text" placeholder="Ex: La Mamounia" />
                        </div>

                        <div className="input-box">
                            <label>Ville</label>
                            <input defaultValue={nv.city} ref={txtct} type="text" />
                        </div>

                        <div className="input-box">
                            <label>Prix par nuit (DH)</label>
                            <input defaultValue={nv.price_per_night} ref={txtpr} type="text" />
                        </div>

                        <div className="input-box">
                            <label>Image de couverture</label>
                            <input ref={txtimg} type="file" className="file-input-field" />
                        </div>

                        <div className="input-box">
                            <label>Note /5</label>
                            <input defaultValue={nv.rating} ref={txtrt} type="text" />
                        </div>

                        <div className="input-box full-width">
                            <label>Description détaillée</label>
                            <textarea defaultValue={nv.description} ref={txtdc} rows="3" />
                        </div>

                        <div className="input-box">
                            <label>Commodités (Séparées par virgule)</label>
                            <input defaultValue={nv.amenities} ref={txtamt} type="text" />
                        </div>

                        <div className="input-box">
                            <label>Catégorie</label>
                            <input defaultValue={nv.category} ref={txtcat} type="text" />
                        </div>

                        <div className="input-box">
                            <label>Chambres Disponibles</label>
                            <input defaultValue={nv.rooms_available} ref={txtra} type="text" />
                        </div>

                        <div className="input-box">
                            <label>Petit Déjeuner</label>
                            <input defaultValue={nv.breakfast} ref={txtbk} type="text" />
                        </div>
                    </div>

                    <div className="form-footer">
                        <button className="main-submit-btn" onClick={handelUpdate}>
                            {btn} les données
                        </button>
                        <button className="cancel-btn" onClick={() => nav("/Hotels")}>
                            Annuler
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ADDHT;