import React from 'react';
import { useState, useEffect } from 'react';

export function ListEvents(){
    const[events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch('/api/events');
            const data = await res.json();
            setEvents(data);
        };
        
        fetchEvents();
    }, []);

    return (
        <div className="overflow-x-auto">
            <div className="grid grid-flow-col grid-rows-3 gap-4 p-4">
                {events.map((event, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h1>{ event.title }</h1>
                        <p>{ event.text }</p>
                        <p>By: { event.author }</p>
                        <p>Date: {new Date(event.timestamp).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListEvents;