import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return ( 
        <header>
            <div className="logo">
                <Link  to="/" >HAJZ.MA</Link>
            </div>
            <div>
                <ul>
                    <li><Link  to="/Flight"><img className='imgf' src="/img/Flight.png" alt="" /></Link></li>
                    <li><Link to="/Hotels"><img className='imgf' src="/img/Hotel.png" alt="" /></Link></li>
                    <li><Link to="/Cars"><img className='imgf' src="/img/Car.png" alt="" /></Link></li>
                </ul>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>

                    <li>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                FLIGHT
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item"  to="/Flight">LIST FLIGHT</Link></li>
                                <li><Link className="dropdown-item"  to="/Flight/ADD">ADD FLIGHT</Link></li>
                                <li><Link className="dropdown-item" to="/Delete">DELETE FLIGHT</Link></li>
                            </ul>
                            </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hotels
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item"  to="/Hotels">LIST HOTELS</Link></li>
                                <li><Link className="dropdown-item"  to="/Hotels/ADDHT">ADD HOTELS</Link></li>
                                <li><Link className="dropdown-item" to="/Delete">DELETE HOTELS</Link></li>
                                
                            </ul>
                            </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Cars
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item"  to="/Cars">LIST CARS</Link></li>
                                <li><Link className="dropdown-item"  to="/Cars/ADDCARS">ADD CARS</Link></li>
                                <li><Link className="dropdown-item" to="/Delete">DELETE CARS</Link></li>
                                
                            </ul>
                            </div>
                    </li>
                </ul>
            </nav>
            
        </header>
        
    );
}

export default Header;