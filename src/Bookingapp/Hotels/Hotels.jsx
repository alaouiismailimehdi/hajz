import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Hotels.css';

function HotelCard({ ht }) {
    const [likes, setLikes] = useState(ht.likes || 0);
    const [dislikes, setDislikes] = useState(ht.dislikes || 0);

  
    const [showInput, setShowInput] = useState(false);
    const [tempText, setTempText] = useState("");
    const [finalComment, setFinalComment] = useState("");

    const handlePost = () => {
        if (tempText.trim() !== "") {
            setFinalComment(tempText);
            setShowInput(false);
        }
    };

    const handleDelete = () => {
        setFinalComment("");
        setTempText("");
    };

    return (
        <div className="h-card">
            <div className="h-card-img">
                <img src={ht.image} alt={ht.name} />
                <div className="h-rating-badge">⭐ {ht.rating}</div>
            </div>

            <div className="h-card-info">
                <div className="h-title-row">
                    <h3>{ht.name}</h3>
                    
                    <div className="vote-container">
                        <div className="vote-item">
                            <button className="btn-vote plus" onClick={() => setLikes(likes + 1)}>👍</button>
                            <span>{likes}</span>
                        </div>
                        <div className="vote-item">
                            <button className="btn-vote minus" onClick={() => setDislikes(dislikes + 1)}>👎</button>
                            <span>{dislikes}</span>
                        </div>
                      
                        <button className="btn-vote comment-btn" onClick={() => setShowInput(!showInput)}>💬</button>
                    </div>

                    <p className="h-city">📍 {ht.city}</p>
                </div>

                {showInput && (
                    <div className="comment-box-area">
                        <input 
                            type="text" 
                            placeholder="Add a review..." 
                            value={tempText}
                            onChange={(e) => setTempText(e.target.value)}
                        />
                        <button className="post-btn" onClick={handlePost}>Post</button>
                    </div>
                )}

               
                {finalComment && (
                    <div className="user-comment-display">
                        <p><strong>Review:</strong> {finalComment}</p>
                        <button className="delete-comment-btn" onClick={handleDelete}>Delete</button>
                    </div>
                )}

                <div className="h-price-row">
                    <span className="h-price-tag">{ht.price_per_night} DH</span>
                    <span className="h-unit">/ night</span>
                </div>

                <div className="h-card-footer">
                    <Link className="h-view-btn" to={`DetailsHt/${ht.id}`}>View Deal</Link>
                    <Link className="h-edit-link" to={`/Hotels/ADDHT/${ht.id}`}>Edit Details</Link>
                </div>
            </div>
        </div>
    );
}

function Hotel() {
    const db = useSelector(st => st.dbht.dbHotels || []);
    const [searchName, setSearchName] = useState("");

    const filteredHotels = db.filter(el =>
        el.name.toLowerCase().includes(searchName.toLowerCase())
    );

    return (
        <div className="hotel-page-wrapper">
            <header className="hotel-search-header">
                <h1 className="title">Find Your Next Stay</h1>
                <div className="hotel-search-bar">
                    <input
                        type="text"
                        placeholder="Hotel name..."
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                    <button className="h-search-btn">Search</button>
                </div>
            </header>

            <div className="hotel-grid">
                {filteredHotels.length > 0 ? (
                    filteredHotels.map(ht => (
                        <HotelCard key={ht.id} ht={ht} />
                    ))
                ) : (
                    <div className="h-no-results">No hotels match your search.</div>
                )}
            </div>
        </div>
    );
}

export default Hotel;