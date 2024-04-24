import Layout from '@/components/layout'
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';
import MenuTabs from '../components/foodPage/MenuTabs'; // Ensure path is correct


export const Example = () => {
  return(
    <Layout>
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
    </Layout>
  )
}
