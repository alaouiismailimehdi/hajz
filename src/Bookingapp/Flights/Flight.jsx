import { useSelector } from "react-redux";
import { useState } from "react";
import './Flight.css';
import { Link } from "react-router-dom";
function Flight() {
    const db = useSelector(st => st.dbfl.dbflights || []);
  
    
    const [searchOrigin, setSearchOrigin] = useState("");
    const [searchDest, setSearchDest] = useState("");
    const [searchDate, setSearchDate] = useState("");
  
   
    const filteredFlights = db.filter(el => 
      el.origin_city.toLowerCase().includes(searchOrigin.toLowerCase()) &&
      el.destination_city.toLowerCase().includes(searchDest.toLowerCase()) &&
      el.departure_date.includes(searchDate)
    );
  
    return (
      <div className="home-container">
        
        <div className="search-section">
          <div className="search-bar">
            <div className="input-group">
              
              <input 
                type="text" 
                placeholder="From: City " 
                value={searchOrigin}
                onChange={(e) => setSearchOrigin(e.target.value)}
              />
            </div>
            <div className="input-group">
              <i className="fas fa-plane-arrival"></i>
              <input 
                type="text" 
                placeholder="To: Destination " 
                value={searchDest}
                onChange={(e) => setSearchDest(e.target.value)}
              />
            </div>
            <div className="input-group">
              <i className="fas fa-plane-arrival"></i>
              <input 
                type="date" 
                placeholder="To: Destination " 
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
              />
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>
  
        
        <div className="flights-grid">
          {filteredFlights.length > 0 ? (
            filteredFlights.map(fl => (
              <div key={fl.id} className="flight-card">
                <div className="card-header">
                  <span className="airline">{fl.airline}</span>
                  <span className="price">{fl.price} DH</span>
                </div>
                <div className="card-body">
                  <h3>{fl.origin_city} ➔ {fl.destination_city}</h3>
                  <p>depart :{fl.departure_date}</p>
                  <p>Return : {fl.return_date}</p>
                  
                </div>
                <Link className="book-btn" align="center" to={`Details/${fl.id}`} >View Deal</Link><br />
                <div className="btn-cont">
                <button className="bbtn"><Link to={`/Flight/ADD/${fl.id}`}>Update</Link></button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">No flights found for these cities.</div>
          )}
        </div>
      </div>
    );
}

export default Flight;