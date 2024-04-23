import React, { useState } from 'react';
import VisualGameComponent from './VisualGameComponent';

// ai-gen start (ChatGPT-3.5, 2)
// used ai for documentation and match the format as other pages
function GameTabs() {
    // Control the sub-tabs under "games"
    const [subTab, setSubTab] = useState(''); 

    // Function to handle sub-tab changes for "Game mode"
    const handleSubTabChange = (mode) => {
        setSubTab(subTab === mode ? '' : mode);
    };

    return (
    <div>
            {/* Render sub-tabs and corresponding components for "Game Mode" tab */}
            <div className="pl-4 pt-4">
                <button
                    onClick={() => handleSubTabChange('single')}
                    className={`py-2 px-4 text-sm font-bold block w-full text-left ${subTab === 'single' ? 'bg-blue-100 text-black' : 'bg-blue-300 hover:bg-blue-200'}`}
                >
                    SinglePlayer {subTab === 'single' ? '▲' : '▼'}
                </button>
                {subTab === 'single' && <VisualGameComponent gameDataPath="singlePlayer.json" />}

                <button
                    onClick={() => handleSubTabChange('multi')}
                    className={`py-2 px-4 text-sm font-bold block w-full text-left ${subTab === 'multi' ? 'bg-blue-100 text-black' : 'bg-blue-300 hover:bg-blue-200'}`}
                >
                    Multiplayer {subTab === 'multi' ? '▲' : '▼'}
                </button>
                {subTab === 'multi' && <VisualGameComponent gameDataPath="multiPlayer.json" />}
            </div>
        </div>
    );
}
// ai-gen end
export default GameTabs;
