/**
 * 
 */

import React from 'react';
import { Tabs } from './data.js';

const Title = ({ page }) => {
    const currentTab = Tabs.find(tab => tab.name === page);

    return (
        <div className={`flex justify-center w-full my-2 p-3 rounded-lg bg-gradient-to-r ${ currentTab.color }`}>
            <div className={`flex items-center text-3xl text-white font-bold`}>
                <img src={ currentTab.imgSrc } alt={ currentTab.name } className="w-16 mr-5"/>
                { currentTab.name }
            </div>
        </div>
    )
}

export default Title;