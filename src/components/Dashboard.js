import React, { useState } from 'react';
import MapView from '../MapView.js';

const Dashboard = () => {
    const [location, setLocation] = useState('');
    const [incomeLevel, setIncomeLevel] = useState('');
    const [attributes, setAttributes] = useState({
        food: false,
        shelter: false,
        medical: false,
        mentalHealth: false,
    });
    const [assistanceData, setAssistanceData] = useState([]); // State for storing assistance data

    const handleAttributeChange = (event) => {
        const { name, checked } = event.target;
        setAttributes((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleSearch = () => {
        // Fetch assistance data based on user selections
        // Placeholder data for demonstration purposes
        const data = [
            { id: 1, name: "Food Bank A", lat: 51.505, lng: -0.09 },
            { id: 2, name: "Shelter B", lat: 51.51, lng: -0.1 },
        ];
        setAssistanceData(data);
    };

    return (
        <div>
            <h2>Assistance Dashboard</h2>
            <div>
                <label>
                    Location:
                    <input 
                        type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        placeholder="Enter your location" 
                    />
                </label>
            </div>
            <div>
                <label>
                    Income Level:
                    <select 
                        value={incomeLevel} 
                        onChange={(e) => setIncomeLevel(e.target.value)}
                    >
                        <option value="">Select Income Level</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
            </div>
            <div>
                <h3>Select Assistance Types:</h3>
                <label>
                    <input 
                        type="checkbox" 
                        name="food" 
                        checked={attributes.food} 
                        onChange={handleAttributeChange} 
                    />
                    Food Banks
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="shelter" 
                        checked={attributes.shelter} 
                        onChange={handleAttributeChange} 
                    />
                    Shelters
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="medical" 
                        checked={attributes.medical} 
                        onChange={handleAttributeChange} 
                    />
                    Medical Aid
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="mentalHealth" 
                        checked={attributes.mentalHealth} 
                        onChange={handleAttributeChange} 
                    />
                    Mental Health Services
                </label>
            </div>
            <button onClick={handleSearch}>Find Assistance</button>
            <MapView assistanceData={assistanceData} /> {/* Map component rendering */}
        </div>
    );
};

export default Dashboard;
