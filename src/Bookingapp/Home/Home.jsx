import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const dbf = useSelector(st => st.dbfl.dbflights || []);
    const dbc = useSelector(st => st.dbCr.dbCars || []);
    const dbh = useSelector(st => st.dbht.dbHotels || []);

    return (
        <div className="home-page-container">
            <section className="hero-banner">
                <h1>Welcome to HAJZ.MA</h1>
                
            </section>

            
            <div className="row-section">
                <div className="row-header">
                    <h2> Popular Flights</h2>
                    <Link to="/Flight" className="see-all">See All</Link>
                </div>
                <div className="horizontal-slider">
                    {dbf.map(fl => (
                        <div key={fl.id} className="mini-card flight-mini">
                            <div className="mini-card-body">
                                <h3>{fl.origin_city} ➔ {fl.destination_city}</h3>
                                <p className="airline-name">{fl.airline}</p>
                                <div className="price-box">{fl.price} DH</div>
                                <Link to={`/Flight/Details/${fl.id}`} className="mini-btn">View</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="row-section">
                <div className="row-header">
                    <h2> Top Hotels</h2>
                    <Link to="/Hotels" className="see-all">See All</Link>
                </div>
                <div className="horizontal-slider">
                    {dbh.map(ht => (
                        <div key={ht.id} className="mini-card hotel-mini">
                            <img src={ht.image} alt={ht.name} className="mini-img" />
                            <div className="mini-card-body">
                                <h3>{ht.name}</h3>
                                <p>📍 {ht.city}</p>
                                <div className="price-box">{ht.price_per_night} DH</div>
                                <Link to={`/Hotels/DetailsHt/${ht.id}`} className="mini-btn">Book</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="row-section">
                <div className="row-header">
                    <h2> Available Cars</h2>
                    <Link to="/Cars" className="see-all">See All</Link>
                </div>
                <div className="horizontal-slider">
                    {dbc.map(car => (
                        <div key={car.id} className="mini-card car-mini">
                            <img src={car.image} alt={car.model} className="mini-img" />
                            <div className="mini-card-body">
                                <h3>{car.model}</h3>
                                <p>⚙️ {car.transmission}</p>
                                <div className="price-box">{car.price_per_day} DH</div>
                                <Link to={`/Cars/DetailCars/${car.id}`} className="mini-btn">Rent</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;