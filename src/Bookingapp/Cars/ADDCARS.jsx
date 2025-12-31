import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ajo, modf } from "../store/Carsslice";
import { useEffect, useRef, useState } from "react";
import "./ADDCARS.css"; 

function ADDCARS() {
    const db = useSelector(st => st.dbCr.dbCars);
    const { id } = useParams();
    const Dispatch = useDispatch();
    const nav = useNavigate();
    const [uc, setuc] = useState({ id: "", model: "", color: "", year: "", category: "", transmission: "", fuel: "", seats: "", price_per_day: "", status: "", image: "" });
    const [btn, setbtn] = useState("Ajouter");
    const [etat, setetat] = useState(false);
    

    useEffect(function () {
        if (id) {
            setbtn("Modifier");
            setetat(true);
            let r = db.find(el => el.id == Number(id));
            if (r) setuc(r);
        }
    }, [id, db]);

    const txtid = useRef();
    const txtmodel = useRef();
    const txtcolor = useRef();
    const txtyear = useRef();
    const txtcategory = useRef();
    const txttransmission = useRef();
    const txtfuel = useRef();
    const txtseats = useRef();
    const txtprice_per_day = useRef();
    const txtstatus = useRef();
    const txtimage = useRef();

    const handelUP = () => {
        const nc = {
            id: txtid.current.value,
            model: txtmodel.current.value,
            color: txtcolor.current.value,
            year: txtyear.current.value,
            category: txtcategory.current.value,
            transmission: txttransmission.current.value,
            fuel: txtfuel.current.value,
            seats: txtseats.current.value,
            price_per_day: txtprice_per_day.current.value,
            status: txtstatus.current.value,
            image: txtimage.current.files[0] ? txtimage.current.files[0].name : uc.image
        };
        if (btn === "Ajouter") {
            Dispatch(ajo(nc));
            alert("Ajouté avec succès");
            nav("/Cars");
        } else {
            Dispatch(modf(nc));
            alert("Modifié avec succès");
            nav("/Cars");
        }
    };

    return (
        <div className="admin-page-container">
            <div className="form-card">
                <h2 className="form-title">{btn === "Ajouter" ? "Ajouter une Voiture" : "Modifier la Voiture"}</h2>
                <div className="form-grid">
                    <div className="form-group">
                        <label>ID</label>
                        <input key={uc.id} defaultValue={uc.id} ref={txtid} readOnly={etat} type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>MODÈLE</label>
                        <input key={uc.model} defaultValue={uc.model} ref={txtmodel} type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>COULEUR</label>
                        <input key={uc.color} defaultValue={uc.color} ref={txtcolor} type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>ANNÉE</label>
                        <input key={uc.year} defaultValue={uc.year} ref={txtyear} type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>CATÉGORIE</label>
                        <input key={uc.category} defaultValue={uc.category} ref={txtcategory} type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>TRANSMISSION</label>
                        <input key={uc.transmission} defaultValue={uc.transmission} ref={txttransmission} type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>CARBURANT</label>
                        <input key={uc.fuel} defaultValue={uc.fuel} ref={txtfuel} type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>SIÈGES</label>
                        <input key={uc.seats} defaultValue={uc.seats} ref={txtseats} type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>PRIX / JOUR</label>
                        <input key={uc.price_per_day} defaultValue={uc.price_per_day} ref={txtprice_per_day} type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>STATUT</label>
                        <input key={uc.status} defaultValue={uc.status} ref={txtstatus} type="text" className="form-input" />
                    </div>
                    <div className="form-group full-width">
                        <label>IMAGE</label>
                        <input ref={txtimage} type="file" className="form-input file-input" />
                    </div>
                </div>
                <button className="submit-btn" onClick={handelUP}>{btn}</button>
            </div>
        </div>
    );
}

export default ADDCARS;