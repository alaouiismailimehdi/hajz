import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import './DetailsHt.css';

function DetailsHt() {
    const db = useSelector(st => st.dbht.dbHotels);
    const { id } = useParams();
    const ht = db.find(f => f.id == Number(id));
    
    return (
        <div className="reservation-page">
            <Link to="/Hotels" className="back-link">← Back to Hotels</Link>
            
            <div className="hotel-details-container">
               
                <div className="hotel-visuals">
                    <img src={ht?.image} alt={ht?.name} className="hotel-hero-img" />
                </div>

               
                <div className="hotel-info-grid">
                    <div className="info-main">
                        <h1 className="hotel-name-title">{ht?.name}</h1>
                        <p className="hotel-location-subtitle">📍 {ht?.city} — {ht?.category}</p>
                        
                        <div className="rating-box">
                            <span className="rating-score">⭐ {ht?.rating}</span>
                            <span className="rating-text">Excellent Quality</span>
                        </div>

                        <div className="description-section">
                            <h3>About this hotel</h3>
                            <p>{ht?.description}</p>
                        </div>

                        <div className="amenities-section">
                            <h3>Popular Amenities</h3>
                            <div className="amenity-tags">
                                {ht?.amenities}
                            </div>
                        </div>
                    </div>

                    
                    <div className="booking-card">
                        <div className="price-header">
                            <span className="price-amount">{ht?.price_per_night} DH</span>
                            <span className="price-period">/ night</span>
                        </div>
                        
                        <div className="booking-specs">
                            <div className="spec-item">
                                <span>Breakfast:</span>
                                <strong>{ht?.breakfast}</strong>
                            </div>
                            <div className="spec-item">
                                <span>Availability:</span>
                                <strong>{ht?.rooms_available} rooms</strong>
                            </div>
                        </div>

                        <button className="reserve-btn">
                            Reserve Your Stay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsHt;