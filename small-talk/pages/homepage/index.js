/**
 * 
 */
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout.js";
import Title from "@/components/title.js";
import FriendsList from "@/app/components/friends/FriendsList";

export const Homepage = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <div className='bg-slate-800 text-white'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <Title page="Home"/>
            </Layout>
        </div>
    )
}

export default Homepage;