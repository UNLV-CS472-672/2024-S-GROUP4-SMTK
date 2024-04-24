import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";
import Title from "@/components/title";
import { Tabs } from "@/components/data";  // Ensure this is the correct path to your Tabs data
import FriendLayout from '@/app/components/friends/FriendLayout';
import MovieRow from '@/app/components/moviesPage/MovieRow';
import superMovies from '@/app/data/moviesData/superMovies';

export const Homepage = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[]);

    return (
        <div className='bg-slate-800 text-white'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <Title page="Home"/>
                <div className="grid grid-cols-2 gap-4 p-4">
                    {Tabs.filter(tab => tab.name !== "Home").map(tab => (
                        <a href={tab.slug} key={tab.name} className="hover:opacity-80">
                            <Title page={tab.name}/>
                        </a>
                    ))}
                </div>
                <div className="text-black mt-8 mb-4"> 
                    <FriendLayout />
                </div>
                <div className="bg-white text-black rounded-lg shadow-lg mb-40">  
                    <MovieRow title="Today's Top Movies" movies={superMovies} />
                </div>
            </Layout>
        </div>
    );
}

export default Homepage;
