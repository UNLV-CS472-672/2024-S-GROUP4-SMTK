"use client"; // Specifies this code is for client-side rendering
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';
import MenuTabs from '../components/foodPage/MenuTabs'; // Ensure path is correct

export default function Food() {
    return (
        // Wrap the content in ThemeLayout component for consistent styling
        <ThemeLayout>
            <div style={{
                // Styling for the container div
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%', // Ensure the content doesn't exceed the width of its container
                padding: '20px',
                overflow: 'hidden' // Ensures nothing gets cut off
            }}>
                {/* Render the MenuTabs component */}
                <MenuTabs />
            </div>
        </ThemeLayout>
    );
}
