import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SideBar from './SideBar';
import buttons from "../data/sideBarButtons.json"

/*
  Mock the SidebarButton component with a custom implementation
  that renders an identifiable element for each button that will
  hold the attributes from the list in sideBarButtons.json

  The mock is found in the __mocks__ directory
*/
jest.mock('./SidebarButton');

/*
  The behavior we want to check is that what's rendered on the screen is in the 
  sideBarButtons.json file, this way if any structure to that json changes, then
  we're not failing a test.
*/
const expectedButtons = buttons;

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