import React from 'react'
import "./Cropinfo.css"

function Cropinfo() {
    const cropinfo = [
        {
            "name": "Wheat",
            "type": "Rabi",
            "season": "Winter",
            "states": ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh", "Bihar"],
            "climate": "Cool and dry, 10°C to 25°C",
            "description": "Wheat is a major cereal crop sown in winter and harvested in spring. It requires cool weather and well-drained soil."
        },
        {
            "name": "Rice",
            "type": "Kharif",
            "season": "Monsoon",
            "states": ["West Bengal", "Uttar Pradesh", "Punjab", "Andhra Pradesh", "Odisha"],
            "climate": "Hot and humid, 20°C to 35°C, high rainfall",
            "description": "Rice is the staple food crop of India, grown mainly during the monsoon season in water-rich areas."
        },
        {
            "name": "Maize",
            "type": "Kharif",
            "season": "Monsoon",
            "states": ["Karnataka", "Madhya Pradesh", "Bihar", "Andhra Pradesh", "Rajasthan"],
            "climate": "Warm and moderately humid, 21°C to 27°C",
            "description": "Maize is a versatile cereal used for food, fodder, and industrial purposes, requiring moderate rainfall and sunshine."
        },
        {
            "name": "Cotton",
            "type": "Kharif",
            "season": "Monsoon",
            "states": ["Maharashtra", "Gujarat", "Telangana", "Andhra Pradesh", "Punjab"],
            "climate": "Warm and dry, 21°C to 30°C",
            "description": "Cotton is a fiber crop grown in black soil regions and needs a long frost-free warm season."
        },
        {
            "name": "Sugarcane",
            "type": "Annual",
            "season": "Both Rabi and Kharif",
            "states": ["Uttar Pradesh", "Maharashtra", "Karnataka", "Bihar", "Tamil Nadu"],
            "climate": "Hot and humid, 20°C to 35°C",
            "description": "Sugarcane is a tropical crop grown for sugar production and thrives in well-irrigated fertile soil."
        },
        {
            "name": "Millets",
            "type": "Kharif",
            "season": "Monsoon",
            "states": ["Rajasthan", "Karnataka", "Telangana", "Maharashtra", "Tamil Nadu"],
            "climate": "Hot and dry, 20°C to 35°C",
            "description": "Millets are hardy grains like jowar, bajra, and ragi, suited for arid regions and rich in nutrients."
        },
        {
            "name": "Pulses",
            "type": "Rabi & Kharif",
            "season": "Both",
            "states": ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh", "Karnataka"],
            "climate": "Mild climate, 18°C to 28°C",
            "description": "Pulses like lentils, chickpeas, and tur are protein-rich crops grown in both seasons, needing less water."
        },
        {
            "name": "Groundnut",
            "type": "Kharif",
            "season": "Monsoon",
            "states": ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Karnataka", "Maharashtra"],
            "climate": "Warm, 25°C to 30°C, moderate rainfall",
            "description": "Groundnut is an oilseed crop grown in sandy soil, needing warm weather and well-drained fields."
        }
    ];

    const getCropIcon = (name) => {
        const icons = {
            'Wheat': '🌾',
            'Rice': '🍚',
            'Maize': '🌽',
            'Cotton': '🌿',
            'Sugarcane': '🎋',
            'Millets': '🌾',
            'Pulses': '🫘',
            'Groundnut': '🥜'
        };
        return icons[name] || '🌱';
    };

    return (
        <div className="main-section-cropinfo">
            {/* Header Section */}
            <div className="header-container">
                <div className="header-icon">🌾</div>
                <div className="heading-of-page">
                    <h1 className="main-title">भारतीय फसल डेटाबेस</h1>
                    <h2 className="sub-title">Indian Crop Database</h2>
                    <p className="description">Complete information about major crops grown across India</p>
                </div>
            </div>

            {/* Crop Cards Container */}
            <div className="crop-container">
                {cropinfo.map((crop, index) => (
                    <div key={index} className="crop-card">
                        {/* Card Header */}
                        <div className="crop-header">
                            <div className="crop-icon">{getCropIcon(crop.name)}</div>
                            <div className="crop-name-section">
                                <h3 className="crop-name">{crop.name}</h3>
                                <span className={`crop-type ${crop.type.toLowerCase().replace(' & ', '-')}`}>
                                    {crop.type}
                                </span>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="crop-content">
                            <div className="info-row">
                                <span className="info-label">🌦️ Season:</span>
                                <span className="info-value">{crop.season}</span>
                            </div>

                            <div className="info-row">
                                <span className="info-label">🌡️ Climate:</span>
                                <span className="info-value">{crop.climate}</span>
                            </div>

                            <div className="info-row description-row">
                                <span className="info-label">📝 Description:</span>
                                <p className="crop-description">{crop.description}</p>
                            </div>

                            <div className="info-row">
                                <span className="info-label">📍 Major States:</span>
                                <div className="states-container">
                                    {crop.states.map((state, idx) => (
                                        <span key={idx} className="state-tag">
                                            {state}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cropinfo