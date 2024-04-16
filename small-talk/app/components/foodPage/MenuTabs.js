import React, { useState } from 'react';
import VisualMenuComponent from '../../food/foodComponents/VisualMenuComponent'; // Ensure path is correct

function MenuTabs() {
    const [activeTab, setActiveTab] = useState('');

    const toggleTab = (tab) => {
        setActiveTab(activeTab === tab ? '' : tab);
    };

    return (
        <div className="menu-container w-full max-w-4xl mx-auto p-4">
            <div className="text-lg">  {/* Increase base text size for better readability */}
                <div className="border-b-2 border-gray-200 mb-4">
                    <button
                        className={`py-3 px-6 text-base font-bold block w-full text-left rounded-md transition duration-300 ease-in-out ${activeTab === 'breakfast' ? 'bg-blue-100 text-white' : 'bg-gray-20 hover:bg-gray-300'
                            }`}
                        onClick={() => toggleTab('breakfast')}
                    >
                        Breakfast {activeTab === 'breakfast' ? '▲' : '▼'}
                    </button>
                    {activeTab === 'breakfast' && <VisualMenuComponent menuDataPath="breakfastMenu.json" />}

                    <button
                        className={`py-3 px-6 text-base font-bold block w-full text-left rounded-md transition duration-300 ease-in-out ${activeTab === 'lunch' ? 'bg-blue-500 text-white' : 'bg-gray-20 hover:bg-gray-300'
                            }`}
                        onClick={() => toggleTab('lunch')}
                    >
                        Lunch {activeTab === 'lunch' ? '▲' : '▼'}
                    </button>
                    {activeTab === 'lunch' && <VisualMenuComponent menuDataPath="lunchMenu.json" />}

                    <button
                        className={`py-3 px-6 text-base font-bold block w-full text-left rounded-md transition duration-300 ease-in-out ${activeTab === 'dinner' ? 'bg-blue-500 text-white' : 'bg-gray-20 hover:bg-gray-300'
                            }`}
                        onClick={() => toggleTab('dinner')}
                    >
                        Dinner {activeTab === 'dinner' ? '▲' : '▼'}
                    </button>
                    {activeTab === 'dinner' && <VisualMenuComponent menuDataPath="dinnerMenu.json" />}
                </div>
            </div>
        </div>
    );
}

export default MenuTabs;
