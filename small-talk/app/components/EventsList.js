import React, { useState } from 'react';

function EventsList({events})
{
    // Get today's date, sets time to 0
    const getCurrentDate = () =>
    {
        // Get today's date
        let currentDate = new Date();
    
        // Set time to 0 since not time sensitive
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);
    
        return currentDate;
    };

    // Compare today's date and the given event's date
    // Returns -1 if past event, 0 if today's event, 1 if future event
    const compareDates = (event) =>
    {
        // Today's date
        let currentDate = getCurrentDate();

        // Event's date
        let eventDate = new Date(event.date.year, event.date.month-1, event.date.day);

        // Check if today's date and event's date are equal
        if(currentDate.getTime() == eventDate.getTime())
        {
            return 0;
        }
        // Check if event's date is later than today's date
        else if(currentDate.getTime() < eventDate.getTime())
        {
            return 1;
        }
        else // Event's date is before today's date
        {
            return -1;
        }
    };

    // List given event's date, title, and description
    const listEvent = (event) =>
    {
        return(
            <ul className = 'bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg p-3 divide-y divide-solid divide-gray-800 '>
                <li className = 'grid grid-cols-2'>
                    <span className = 'font-semibold text-left'>{event.title}</span> 
                    <span className = 'text-right'>{event.date.year}-{event.date.month}-{event.date.day}</span>
                </li>
                <li>{event.description}</li>
            </ul>
        );
    };

    // Check if given event today, if so list it
    const listTodaysEvents = (event) =>
    {
        // Compare today's date and event's date -- see if equal
        if(compareDates(event) == 0)
        {
            return(listEvent(event));
        }
    };

    // Check if given event is in future, if so list it
    const listUpcomingEvents = (event) =>
    {
        // Compare today's date and event's date -- see if event's date is upcoming
        if(compareDates(event) == 1)
        {
            return(listEvent(event));
        }
    }
    
    // Check if given event is in past, if so list it
    const listPastEvents = (event) =>
    {
        // Compare today's date and event's date -- see if event's date is in past
        if(compareDates(event) == -1)
        {
            return(listEvent(event));
        }
    }

    // Dropdown for past events
    const [subTab, setSubTab] = useState('');

    // Handle past events tab click
    const handleSubTabChange = (tab) => {
        setSubTab(subTab === tab ? '' : tab);
    };

    return(
        <div className = 'space-y-10'> {/* Adds space between event categories */}
            <div className = 'bg-white rounded-lg text-gray-800 my-10'>
                <h2 className = 'font-bold text-center pt-4 text-lg'>Today&apos;s Events</h2>
                <ul className = 'p-4 flex-col-reverse space-y-3'>
                    {events.map(listTodaysEvents) /* Lists all events occurring today */} 
                </ul>
            </div>
    
            <div className = 'bg-white rounded-lg text-gray-800'>
                <h2 className = 'font-bold text-center pt-4 text-lg'>Upcoming Events</h2>
                <ul className = 'p-4 flex-col-reverse space-y-3'>
                    {events.map(listUpcomingEvents) /* Lists all events occurring in future */}
                </ul>
            </div>

            <div className = 'bg-white rounded-lg text-gray-800 flex flex-col'>
                <button onClick = {() => handleSubTabChange('past')}>
                    <h2 className = {`font-bold text-center text-lg ${subTab == 'past' ? 'pt-4' : ''}`}>Past Events {subTab == 'past' ? '▲' : '▼'}</h2>
                </button>
                <ul className = {`flex-col-reverse space-y-3 ${subTab == 'past' ? 'p-4' : ''}`}>
                    {subTab == 'past' && events.map(listPastEvents) /* Lists all events occurred in past when clicked */}
                </ul>
            </div>
            <div className = 'divide-y divide-solid'></div>
        </div>


    );
}

export default EventsList;