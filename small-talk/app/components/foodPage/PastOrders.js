import React, { useState } from 'react';
import styles from './PastOrders.module.css';

function PastOrders({ orders }) {
    // State to track the selected day
    const [selectedDay, setSelectedDay] = useState(null);

    // Function to toggle the selected day
    const toggleDay = (day) => {
        setSelectedDay(selectedDay === day ? null : day);
    };

    return (
        <div className={styles.pastOrdersContainer}>
            {/* Mapping through the orders */}
            {orders.map(order => (
                <div key={order.date} className={styles.dayBlock}>
                    {/* Button to toggle the selected day */}
                    <button className={styles.dayTitle} onClick={() => toggleDay(order.date)}>
                        {order.date}
                    </button>
                    {/* Display order details if the day is selected */}
                    {selectedDay === order.date && (
                        <div className={styles.orderDetails}>
                            {/* Mapping through the meals of the selected day */}
                            {order.meals.map((meal, index) => (
                                <div key={index} className={styles.mealItem}>
                                    {/* Display the name of the meal */}
                                    <span>{meal.name}</span>
                                    {/* Button for reordering the meal */}
                                    <button onClick={() => console.log("Reorder functionality goes here.")}>Reorder</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PastOrders;
