import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SideBar from './SideBar';

// Mock the SidebarButton component with a custom implementation
// that renders an identifiable element for each button
const MockSidebarButton = ({ redirect, imgSrc, altText, width, height, marginLeft }) => (
  <div data-testid="sidebar-button" data-redirect={redirect} data-imgsrc={imgSrc} alt={altText} style={{ width, height, marginLeft }}>
    {altText}
  </div>
);
MockSidebarButton.displayName = 'MockSidebarButton'; // Setting the displayName

jest.mock('./SidebarButton', () => MockSidebarButton);

const expectedButtons = [
  { redirect: '/health', imgSrc: '/img/health-tab.png', altText: 'Health', width: '45%', height: 'auto', marginLeft: '7%' },
  { redirect: '/events', imgSrc: '/img/event-tab.png', altText: 'Events', width: '60%', height: 'auto', marginLeft: '15%' },
  { redirect: '/chat', imgSrc: '/img/chat-tab.png', altText: 'Chat', width: '60%', height: 'auto', marginLeft: '10%' },
  { redirect: '/friends', imgSrc: '/img/friend-tab.png', altText: 'Friends', width: '60%', height: 'auto', marginLeft: '5%' },
  { redirect: '/movie', imgSrc: '/img/media-tab.png', altText: 'Movies', width: '60%', height: 'auto', marginLeft: '12%' },
  { redirect: '/food', imgSrc: '/img/food-tab.png', altText: 'Order Food', width: '65%', height: 'auto', marginLeft: '10%' },
  { redirect: '/game', imgSrc: '/img/games-tab.png', altText: 'Games', width: '45%', height: 'auto', marginLeft: '5%' },
];

describe('SideBar Component', () => {
  it('renders the correct number of SidebarButton components', () => {
    render(<SideBar />);
    const buttonElements = screen.getAllByTestId('sidebar-button');
    expect(buttonElements.length).toBe(expectedButtons.length);
  });

  it('passes correct props to each SidebarButton component', () => {
    render(<SideBar />);
    const buttonElements = screen.getAllByTestId('sidebar-button');

    buttonElements.forEach((button, index) => {
      const { redirect, imgSrc, altText, width, height, marginLeft } = expectedButtons[index];
      expect(button).toHaveAttribute('data-redirect', redirect);
      expect(button).toHaveAttribute('data-imgsrc', imgSrc);
      expect(button).toHaveAttribute('alt', altText);
      expect(button).toHaveStyle(`width: ${width}`);
      expect(button).toHaveStyle(`height: ${height}`);
      expect(button).toHaveStyle(`margin-left: ${marginLeft}`);
    });
  });
});
