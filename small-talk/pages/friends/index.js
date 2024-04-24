/**
 * 
 */
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";
import FriendLayout from '@/app/components/friends/FriendLayout';
import R_FriendLayout from '@/app/components/friends/R_FriendLayout';
import Title from '@/components/title';

export const Friends = ({data}) => {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <div className='bg-slate-800 flex flex-col min-h-screen'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
            <div className="flex-grow p-4">  {/* Added padding for all sides */}
                    <Title page="Friends"/>
                    <div className="space-y-10"> {/* This will add space between each component */}
                        <FriendLayout />
                        <R_FriendLayout />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Friends;