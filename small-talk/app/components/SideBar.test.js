import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SideBar from './SideBar';
import buttons from "../data/sidebarButtons.json"

// // @jest-environment node
// global.TextEncoder = require('text-encoding').TextEncoder;

/*
  Mock the SidebarButton component with a custom implementation
  that renders an identifiable element for each button that will
  hold the attributes from the list in sideBarButtons.json

  The mock is found in the __mocks__ directory
*/
jest.mock('./SidebarButton');
jest.mock('./SB_ExpandButton');

/*
  The behavior we want to check is that what's rendered on the screen is in the 
  sideBarButtons.json file, this way if any structure to that json changes, then
  we're not failing a test.
*/
const expectedButtons = buttons;

describe('SideBar Component', () => {
  it('renders the correct number of SidebarButton components when not expanded', () => {
    render(<SideBar isExpanded={false}/>);
    const buttonElements = screen.getAllByTestId('sidebar-button');
    expect(buttonElements.length).toBe(expectedButtons.length);
  });

  it('passes correct props to each SidebarButton component when not expanded', () => {
    render(<SideBar isExpanded={false}/>);
    const buttonElements = screen.getAllByTestId('sidebar-button');

    buttonElements.forEach((button, index) => {
      const { redirect, defaultImg, hoverImg, altText } = expectedButtons[index];
      expect(button).toHaveAttribute('redirect', redirect);
      expect(button).toHaveAttribute('defaultimg', defaultImg);
      expect(button).toHaveAttribute('hoverimg', hoverImg);
      expect(button).toHaveAttribute('alttext', altText)
    });
  });

  it('renders SB_ExpandButton components when expanded', () => {
    // Render the side bar expanded to true
    render(<SideBar isExpanded={true} />);
  });
});