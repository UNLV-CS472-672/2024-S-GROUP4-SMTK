/**
 * 
 */
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";

export const Settings = ({data}) => {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <div className='bg-slate-800'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <h3>Settings Page</h3>
            </Layout>
        </div>
    )
}

export default Settings;