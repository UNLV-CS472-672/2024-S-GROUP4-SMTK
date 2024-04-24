import React, { useState } from 'react';
import { Icons } from "@/components/icons.js";
import ProfileIcon from "@/components/profileIcon.js";

const ProfileOptions = ({ layoutTheme, avatarID, backgroundID, resetToDefault }) => {
    return (
        <div className={`flex flex-col items-center justify-center border-4 border-slate-400 p-5 rounded-lg mx-5 ${ layoutTheme }`}>
            <div className="flex size-48 justify-center">
                <ProfileIcon avatarID={ avatarID } backgroundID={ backgroundID } avatarClass={`w-48`} backgroundClass={`size-48 p-6`}/>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
                <button className="rounded-lg bg-green-500 hover:bg-green-700 px-3 py-1">Save</button>
                <button className="rounded-lg bg-red-500 hover:bg-red-700 px-3 py-1" onClick={ resetToDefault }>Cancel</button>
            </div>
        </div>
    );
};

const ProfileAvatars = ({ setAvatarID }) => {
    return (
        <div className="flex flex-wrap justify-center overflow-auto max-h-48">
            {Object.entries(Icons.avatars).map(([id, avatar]) => (
                <button key={id} className="p-2" onClick={() => setAvatarID(id)}>
                    <img src={avatar.imgSrc} alt={avatar.altText} className="h-20 w-20"/>
                </button>
            ))}
        </div>
    );
};

const ProfileBackgrounds = ({ setBackgroundID }) => {
    return (
        <div className="flex flex-wrap justify-center overflow-auto max-h-48">
            {Object.entries(Icons.backgrounds).map(([id, background]) => (
                <button key={id} className={`rounded-full p-10 m-2 ${background.color}`} onClick={() => setBackgroundID(id)} />
            ))}
        </div>
    );
};

const ProfileButtons = ({ layoutTheme, setAvatarID, setBackgroundID }) => {
    const [Tab, setTab] = useState('avatar');
    const toggleTab = (tab) => {
        setTab(tab);
    }

    return (
        <div className={`border-4 border-slate-400 p-5 rounded-lg mx-5 ${ layoutTheme }`}>
            <div>
                <button className={`border-4 border-slate-400 px-3 py-1 ${Tab === 'avatar' ? 'bg-teal-400' : 'bg-teal-600 hover:bg-teal-800'}`} 
                    onClick={() => toggleTab('avatar')}>Avatar</button>
                <button className={`border-4 border-slate-400 px-3 py-1 ${Tab === 'background' ? 'bg-teal-400' : 'bg-teal-600 hover:bg-teal-800'}`}  
                    onClick={() => toggleTab('background')}>Background</button>
            </div>
            {/* Content below Tabs */}
            <div className="flex border-4 border-slate-400 bg-gradient-to-r from-cyan-400 to-sky-500">
                {Tab === 'avatar' && (
                    <div>
                        <ProfileAvatars setAvatarID={ setAvatarID }/>
                    </div>
                )}
                {Tab === 'background' && (
                    <div>
                        <ProfileBackgrounds setBackgroundID={ setBackgroundID }/>
                    </div>
                )}
            </div>
        </div>
    );
};

const SettingsProfile = ({ layoutTheme }) => {
    // Initial avatar state
    const avatarID = 1;
    const backgroundID = 2;
    
    const [selectedAvatarID, setSelectedAvatarID] = useState(avatarID);
    const [selectedBackgroundID, setSelectedBackgroundID] = useState(backgroundID);

    const resetToDefault = () => {
        setSelectedAvatarID(avatarID);
        setSelectedBackgroundID(backgroundID);
    }

    return (
        <div className={`grid grid-cols-2 w-auto rounded-lg m-3 p-3 ${ layoutTheme }`}>
            <h1 className={`text-xl col-span-2 rounded border-b-4 mb-2 border-slate-400`}>Customize Profile</h1>
            <ProfileOptions layoutTheme={ layoutTheme } avatarID={ selectedAvatarID } backgroundID={ selectedBackgroundID } resetToDefault={ resetToDefault }/>
            <ProfileButtons layoutTheme={ layoutTheme } setAvatarID={ setSelectedAvatarID } setBackgroundID={ setSelectedBackgroundID }/>
        </div>
    );
};

export default SettingsProfile;