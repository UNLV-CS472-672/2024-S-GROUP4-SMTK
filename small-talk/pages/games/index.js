/**
 * 
 */
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";
import GameTabs from '../../app/components/gamesPage/gameTabs';
import Title from '@/components/title';

// ai-gen start (ChatGPT-3.5, 2)
// used ai for documentation and match the format as other pages
export const Game = () => {
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <div className='bg-slate-800 flex flex-col min-h-screen'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
            <Title page="Games"/>
                <div className="flex-grow p-4">  {/* Added padding for all sides */}
                    <GameTabs />

                </div>
            </Layout>
        </div>
    );
}

// ai-gen end
export default Game;