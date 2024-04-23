import React from 'react';
import { render, screen } from '@testing-library/react';
import StreamingServiceCard from './StreamingServiceCard';
//ai-gen start (ChatGPT-4, 1)

describe('StreamingServiceCard', () => {
    const mockService = {
        logo: '/img/services/service1.jpg',
        name: 'Service 1',
    };

    it('renders the service logo and name correctly', () => {
        render(<StreamingServiceCard service={mockService} />);

        const img = screen.getByRole('img', { name: /Service 1/i });
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', '/img/services/service1.jpg');
    });

    it('renders the login button', () => {
        render(<StreamingServiceCard service={mockService} />);

        const button = screen.getByRole('button', { name: /Login/i });
        expect(button).toBeInTheDocument();
    });
});
//ai-gen end