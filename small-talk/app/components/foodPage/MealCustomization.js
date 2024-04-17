import React, { useState } from 'react';
import './MealCustomization.css';

function MealCustomization() {
    // List of dietary options
    const dietaryOptions = [
        { name: 'Vegan', key: 'vegan' },
        { name: 'Gluten-Free', key: 'glutenFree' },
        { name: 'Nut-Free', key: 'nutFree' },
        { name: 'Dairy-Free', key: 'dairyFree' },
        { name: 'Vegetarian', key: 'vegetarian' },
        { name: 'Low Sodium', key: 'lowSodium' },
        { name: 'No Added Sugar', key: 'noAddedSugar' },
        { name: 'Keto', key: 'keto' },
        { name: 'Paleo', key: 'paleo' },
        { name: 'Halal', key: 'halal' }
    ];

    // State to track checked options
    const [options, setOptions] = useState(
        dietaryOptions.reduce((acc, option) => {
            acc[option.key] = false;
            return acc;
        }, {})
    );

    // Handle change in checkbox
    const handleChange = (event) => {
        const { name, checked } = event.target;
        setOptions({
            ...options,
            [name]: checked
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Options:', options);
        // Additional actions can be added here
    };

    return (
        <form onSubmit={handleSubmit} className="meal-customization-form">
            <h3>Customize Your Meal</h3>
            {dietaryOptions.map(option => (
                <label key={option.key}>
                    <input
                        type="checkbox"
                        name={option.key}
                        checked={options[option.key]}
                        onChange={handleChange}
                    />
                    {option.name}
                </label>
            ))}
            <button type="submit">Submit Customization</button>
        </form>
    );
}

export default MealCustomization;
