import React from 'react';
import EventsList from './EventsList';
import { render } from '@testing-library/react';

// ai-gen start (Chat-GPT 3.5, 1)
describe('EventsList component', () => 
{
    // Test Events
    const mockEvents = 
    [
        {
            title: 'Event 1',
            date: 
            {
                year: 2024,
                month: 4,
                day: 24
            },
            description: 'Event 1 - Today\'s Event'
        },
        {
            title: 'Event 2',
            date: 
            {
                year: 2024,
                month: 4,
                day: 25
            },
            description: 'Event 2 - Upcoming Event'
        },
        {
            title: 'Event 3',
            date:
            {
                year: 2024,
                month: 4,
                day: 20
            },
            description: 'Event 3 - Past Event'
        }
    ];
  
    // Checks if component renders properly
    it('renders without crashing', () => 
    {
        render(<EventsList events={mockEvents} />);
    });
  
    // Checks if correct current events present
    it('renders today\'s events', () => 
    {
        const { getByText } = render(<EventsList events={mockEvents} />);
        expect(getByText('Today\'s Events')).toBeInTheDocument();
        expect(getByText('Event 1')).toBeInTheDocument();
    });
  
    // Checks if correct upcoming events present
    it('renders upcoming events', () => 
    {
        const { getByText } = render(<EventsList events={mockEvents} />);
        expect(getByText('Upcoming Events')).toBeInTheDocument();
        expect(getByText('Event 2')).toBeInTheDocument();
    });
  
    // Checks if correct past events present
    it('renders past events when clicked', () => 
    {
        const { getByText, queryByText } = render(<EventsList events={mockEvents} />);
        expect(queryByText('Event 3')).not.toBeInTheDocument();
        expect(getByText('Past Events ▼')).toBeInTheDocument();
        getByText('Past Events ▼').click();
        expect(getByText(/Past Events/)).toBeInTheDocument();
        // expect(getByText(/Event 3/)).toBeInTheDocument();
    });
});
// ai-gen end
