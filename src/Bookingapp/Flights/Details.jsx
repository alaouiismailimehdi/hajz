import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import './Details.css';

function Details() {
    const db = useSelector(st => st.dbfl.dbflights || []);
    const { id } = useParams();
   
    
    
    
    
    const dfl = db.find(l => l.id == Number(id));

     



    return (
        <div className="ticket-container">
            <button className="back-btn" ><Link to={"/Flight/"} >← Back to List</Link></button>
            
            <div className="flight-ticket">
                
                <div className="ticket-header">
                    <div className="airline-brand">
                        <h2>{dfl.airline}</h2>
                    </div>
                    <div className="flight-no">
                        <span>Flight No.</span>
                        <strong>{dfl.flight_number}</strong>
                    </div>
                </div>

                
                <div className="ticket-body">
                    <div className="airport-section">
                        <h1>{dfl.origin_city.substring(0, 3).toUpperCase()}</h1>
                        <p>{dfl.origin_city}</p>
                        <span className="time">{dfl.departure_time}</span>
                    </div>

                    <div className="flight-icon-path">
                        <span>{dfl.duration}</span>
                        <div className="line-path">
                            <span className="plane-symbol">✈</span>
                        </div>
                        <span>{dfl.stops}</span>
                    </div>

                    <div className="airport-section">
                        <h1>{dfl.destination_city.substring(0, 3).toUpperCase()}</h1>
                        <p>{dfl.destination_city}</p>
                        <span className="time">{dfl.arrival_time}</span>
                    </div>
                </div>

                
                <div className="ticket-footer">
                    <div className="info-grid">
                        <div>
                            <label>Date</label>
                            <p>{dfl.departure_date}</p>
                        </div>
                        <div>
                            <label>Class</label>
                            <p>{dfl.class}</p>
                        </div>
                        <div>
                            <label>Luggage</label>
                            <p>{dfl.luggage}</p>
                        </div>
                        <div className="ticket-price">
                            <label>Total Paid</label>
                            <p>{dfl.price} DH</p>
                        </div>
                    </div>
                </div>
                
                <div className="barcode"></div>
            </div>
        </div>
    );
}

export default Details;