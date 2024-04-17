import React, { useState } from 'react';
import styles from './PastOrders.module.css';

function PastOrders({ orders }) {
    const [selectedDay, setSelectedDay] = useState(null);

    const toggleDay = (day) => {
        setSelectedDay(selectedDay === day ? null : day);
    };

    return (
        <div className={styles.pastOrdersContainer}>
            {orders.map(order => (
                <div key={order.date} className={styles.dayBlock}>
                    <button className={styles.dayTitle} onClick={() => toggleDay(order.date)}>
                        {order.date}
                    </button>
                    {selectedDay === order.date && (
                        <div className={styles.orderDetails}>
                            {order.meals.map((meal, index) => (
                                <div key={index} className={styles.mealItem}>
                                    <span>{meal.name}</span>
                                
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
