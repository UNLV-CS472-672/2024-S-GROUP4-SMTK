import React from 'react';
import { render, screen } from '@testing-library/react';
import StreamingServicesRow from './StreamingServicesRow';
//ai-gen start (ChatGPT-4, 1)

describe('StreamingServicesRow', () => {
    it('renders the title and services correctly', () => {
        render(<StreamingServicesRow title="Test Title" />);

        expect(screen.getByText('Test Title')).toBeInTheDocument();

        // Assuming you have 5 services in your servicesData
        const serviceCards = screen.getAllByRole('img');
        expect(serviceCards).toHaveLength(5);
    });
});
//ai-gen end