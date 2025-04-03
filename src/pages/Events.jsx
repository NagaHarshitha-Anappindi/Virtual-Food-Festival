import React from "react";
import "./events.css"; // Ensure this CSS file exists

const Events = () => {
    // Hardcoded food festival data (from images)
    const festivals = [
        {
            id: 1,
            name: "Belvedere Monsoon Food Festival",
            date: "July 12 - July 28",
            location: "VIVRE, Café Belvedere",
            image: "https://www.utsav.gov.in/public/uploads/event_picture_image/event_2561/17257913851061208492.jpg"
        },
        {
            id: 2,
            name: "Street Food Night Market",
            date: "Every Saturday Night",
            location: "Downtown Street, NYC",
            image: "https://creativeyatra.com/wp-content/uploads/2019/04/Banarasi-Food-Festival.jpg"
        },
        {
            id: 3,
            name: "Events.com Food Extravaganza",
            date: "August 10 - August 20",
            location: "Main Square, Chicago",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrih8q4Vd6jl8uWNu8lHkPvNvc2NsasIhwmw&s" // Replace with a correct URL
        }
    ];

    return (
        <div className="events-container">
            <h2>Upcoming Food Festivals</h2>
            <div className="festival-list">
                {festivals.map((festival) => (
                    <div key={festival.id} className="festival-card">
                        <img src={festival.image} alt={festival.name} className="festival-image" />
                        <h3>{festival.name}</h3>
                        <p><strong>Date:</strong> {festival.date}</p>
                        <p><strong>Location:</strong> {festival.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
