/**
 * Settings/index.js is a page in SmallTalk where users can decide which theme they would like to use across the site
 * as well as customizing their profile icon from a selection of avatars and a range of colorful backgrounds.
 * 
 * = Lower Level Components =
 * - SettingsTheme
 * - SettingsProfile
 */
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout.js";
import Title from "@/components/title.js";
import SettingsTheme from "@/components/settingsTheme.js";
import SettingsProfile from "@/components/settingsProfile.js";

export const Settings = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    // Initalize Default Values
    let nextThemeClass = 'bg-slate-800 text-white';
    const [layoutTheme, setLayoutTheme] = useState(nextThemeClass);
    const toggleSelectedTheme = ( previewClass ) => {
        nextThemeClass = previewClass;
    }
    const toggleLayout = () => {
        setLayoutTheme(nextThemeClass);
    }

    return (
        <div className={ layoutTheme }>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <Title page="Settings"/>
                <div className={`flex flex-col rounded-lg w-full bg-slate-400`}>
                    {/* Theme Options */}
                    <SettingsTheme layoutTheme={layoutTheme} toggleSelectedTheme={toggleSelectedTheme} toggleLayout={toggleLayout}/>
                    
                    {/* Profile Options */}
                    <SettingsProfile layoutTheme={ layoutTheme }/>
                </div>
            </Layout>
        </div>
    )
}

export default Settings;