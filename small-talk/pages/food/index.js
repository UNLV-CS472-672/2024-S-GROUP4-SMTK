"use client"; // Specifies this code is for client-side rendering
import Layout from '@/components/layout';
import React from 'react';
import MenuTabs from '../../app/components/foodPage/MenuTabs'; // Ensure path is correct
import { useEffect, useState } from 'react';
import Title from '@/components/title';

export default function Food() {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[]);
    return(
        <div className='bg-slate-800 text-white'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
            <Title page="Food"/>
                <div style={{
                        // Styling for the container div
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '100%', // Ensure the content doesn't exceed the width of its container
                        padding: '20px'
                    }}>
                    {/* Render the MenuTabs component */}
                    <MenuTabs />
                </div>
            </Layout>
        </div>
    );
}