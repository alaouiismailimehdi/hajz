import { useSelector } from "react-redux";
import { useState } from "react"; // Added useState import
import './Cars.css';
import { Link } from "react-router-dom";

function Cars() {
    const db = useSelector(st => st.dbCr.dbCars || []);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCars = db.filter(car => 
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className="cars-page-container">
           

           
            <div className="search-section-wrapper">
    <div className="search-content">
        <h1 className="search-title">Find the Car You Want</h1>
        <div className="search-input-group">
            <input 
                type="text" 
                placeholder="Search by model (e.g. BMW, Mercedes...)" 
                className="search-bar-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm("")}>✕</button>
            )}
        </div>
        <p className="search-subtitle">Discover our premium fleet of over {db.length} vehicles</p>
    </div>
</div>

            <div className="cars-grid">
                
                {filteredCars.map((el, i) => (
                    <div className="car-card" key={i}>
                        <div className="image-container">
                            <img src={el.image} alt={el.model} />
                            <span className="category-badge">{el.category}</span>
                        </div>
                        
                        <div className="car-card-body">
                            <div className="card-header">
                                <h3 className="car-model">{el.model}</h3>
                                <span className="car-year">{el.year}</span>
                            </div>
                            
                            <div className="car-specs">
                                <span>⚙️ {el.transmission}</span>
                                <span>⛽ {el.fuel}</span>
                                <span>👥 {el.seats} Seats</span>
                            </div>

                            <div className="card-footer">
                                <div className="price-section">
                                    <span className="price-value">{el.price_per_day} DH</span>
                                    <span className="price-unit">/ day</span>
                                </div>
                                <div className="mainbtn" >
                                    <button className="view-btn"><Link to={`DetailCars/${el.id}`}>Cars Details</Link></button>
                                    <button className="view-btnn"><Link to={`ADDCARS/${el.id}`}>Update Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           
            {filteredCars.length === 0 && (
                <p style={{ textAlign: 'center', color: '#888' }}>No cars found matching "{searchTerm}"</p>
            )}
        </div>
    );
}

export default Cars;