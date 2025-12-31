import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import './DetailCars.css';

function DetailCars() {
    const db = useSelector(st => st.dbCr.dbCars || []);
    const { id } = useParams();
    const car = db.find(l => l.id == Number(id));

    

    return (
        <div className="car-detail-wrapper">
            <Link to="/Cars" className="back-link">← Return to Fleet</Link>
            
            <div className="car-detail-container">
               
                <div className="car-visual-side">
                    <img src={car.image} alt={car.model} className="car-hero-image" />
                    <div className="car-status-tag" data-status={car.status}>
                        {car.status}
                    </div>
                </div>

               
                <div className="car-specs-side">
                    <div className="car-header">
                        <span className="car-category-label">{car.category}</span>
                        <h1 className="car-title">{car.model} <span className="year-gray">({car.year})</span></h1>
                    </div>

                    <div className="specs-grid">
                        <div className="spec-item">
                            <label>Engine & Fuel</label>
                            <p>⛽ {car.fuel}</p>
                        </div>
                        <div className="spec-item">
                            <label>Transmission</label>
                            <p>⚙️ {car.transmission}</p>
                        </div>
                        <div className="spec-item">
                            <label>Capacity</label>
                            <p>👥 {car.seats} Seats</p>
                        </div>
                        <div className="spec-item">
                            <label>Exterior Color</label>
                            <p>🎨 {car.color}</p>
                        </div>
                    </div>

                    <div className="reservation-summary">
                        <div className="pricing">
                            <span className="amount">{car.price_per_day} DH</span>
                            <span className="per-day">/ per day</span>
                        </div>
                        <button className="booking-btn">Instant Booking</button>
                        <p className="id-stamp">Reference ID: #{car.id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCars;