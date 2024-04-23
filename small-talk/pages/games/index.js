/**
 * 
 */
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";
import GameTabs from '../../app/components/gamesPage/gameTabs';

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
                <div className="flex-grow p-4">  {/* Added padding for all sides */}
                    <h1 className="text-center mb-10 text-white">Game Page</h1>

                    <GameTabs />

                </div>
            </Layout>
        </div>
    );
}

// ai-gen end
export default Game;