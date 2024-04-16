"use client";
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';
import MenuTabs from '../components/foodPage/MenuTabs'; // Ensure path is correct

export default function Food() {
    return (
        <ThemeLayout>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                padding: '20px',
                overflow: 'hidden' // Ensures nothing gets cut off
            }}>
                <MenuTabs />
            </div>
        </ThemeLayout>
    );
}
