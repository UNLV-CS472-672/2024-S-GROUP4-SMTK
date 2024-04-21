import React from 'react';
import { render, screen, within } from '@testing-library/react';
import SideBar from './SideBar';
import buttons from "../data/sidebarButtons.json";
import expand from "../data/sidebarExpand.json";

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
const expectedExpand = expand;

// AI Provided Code: WindowWidth + different describe views
const setupWindowWidth = (width) => {
    global.innerWidth = width;
    global.dispatchEvent(new Event('resize'));
};

describe('SideBar Component', () => {
    describe('in desktop view', () => {
        beforeEach(() => {
            setupWindowWidth(1024);
        });

        it('renders the correct number of SidebarButton components when not expanded', () => {
            render(<SideBar isVisible={true} />);
            const buttonElements = screen.getAllByTestId('sidebar-button');
            expect(buttonElements.length).toBe(expectedButtons.length);
        });

        it('passes correct props to each SidebarButton component when not expanded', () => {
            render(<SideBar isVisible={true} />);
            const buttonElements = screen.getAllByTestId('sidebar-button');
        
            buttonElements.forEach((button, index) => {
                const { redirect, defaultImg, hoverImg, altText } = expectedButtons[index];
                expect(button).toHaveAttribute('redirect', redirect);
                expect(button).toHaveAttribute('defaultimg', defaultImg);
                expect(button).toHaveAttribute('hoverimg', hoverImg);
                expect(button).toHaveAttribute('alttext', altText);
            });
          });
    });

    describe('in mobile view', () => {
        beforeEach(() => {
            setupWindowWidth(500);
        });

        it('renders the correct number of SB_ExpandButton components when expanded', () => {
            // Render the side bar visible to true
            render(<SideBar isVisible={true} />);
            const expandButtons = screen.getAllByTestId('expand-button');
            expect(expandButtons.length).toBe(expand.length);
        });

        it('passes correct props to each SB_ExpandButton component when expanded', () => {
            render(<SideBar isVisible={true} />);
            const expandButtons = screen.getAllByTestId('expand-button');
            
            expandButtons.forEach((button, index) => {
                const { redirect, imgSrc, altText, textClass, imageClass, backgroundColor } = expectedExpand[index];
                
                const linkElement = within(button).getByRole('link');
                const imageElement = within(button).getByRole('img');
                const textElement = within(button).getByText(altText).closest('p');
    
                expect(linkElement).toHaveAttribute('href', redirect);
                expect(imageElement).toHaveAttribute('src', imgSrc);
                expect(imageElement).toHaveAttribute('alt', altText);
                expect(textElement).toHaveClass(textClass);
                expect(imageElement).toHaveClass(imageClass);
                expect(button).toHaveStyle(`background-color: ${backgroundColor}`);
            });
        });
    });
});