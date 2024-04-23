import { compare } from 'bcryptjs';
import React from 'react';

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
            <div>
                <li>{event.date.year}-{event.date.month}-{event.date.day}</li>
                <li className = 'font-semibold'>{event.title}</li>
                <li>{event.description}</li>
            </div>
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

    return(
        <div className = 'space-y-10'> {/* Adds space between event categories */}
            <div className = 'bg-white rounded-lg text-gray-800 text-center my-10'>
                <h2 className = 'font-bold'>Today&apos;s Events</h2>
                <ul className = 'divide-y divide-solid'>
                    {events.map(listTodaysEvents) /* Lists all events occurring today */} 
                </ul>
            </div>
    
            <div className = 'bg-white rounded-lg text-gray-800 text-center'>
                <h2 className = 'font-bold'>Upcoming Events</h2>
                <ul className = 'divide-y divide-solid'>
                    {events.map(listUpcomingEvents) /* Lists all events occuring in future */}
                </ul>
            </div>
        </div>


    );
}

export default EventsList;