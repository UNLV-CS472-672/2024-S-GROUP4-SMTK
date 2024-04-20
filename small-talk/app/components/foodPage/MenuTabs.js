import React, { useState } from 'react';
import VisualMenuComponent from './VisualMenuComponent'; // Ensure path is correct
import PastOrders from './PastOrders';
import orderHistory from '../../data/foodData/orderHistory';
import MealCustomization from './MealCustomization';

function MenuTabs() {
    // State variables to control main and sub-tabs
    const [mainTab, setMainTab] = useState('orderFood'); // Control the main tabs
    const [subTab, setSubTab] = useState(''); // Control the sub-tabs under "Order Food"

    // Function to handle main tab changes
    const handleMainTabChange = (tab) => {
        setMainTab(tab);
        if (tab !== 'orderFood') {
            setSubTab(''); // Reset sub-tabs when moving away from "Order Food"
        }
    };

    // Function to handle sub-tab changes for "Order Food"
    const handleSubTabChange = (tab) => {
        setSubTab(subTab === tab ? '' : tab);
    };

    return (
        <div className="menu-container w-full max-w-7xl mx-auto p-4">
            <div className="text-lg border-b-2 border-gray-200 mb-4">
                {/* Main Tabs at the top like a filing folder */}
                <div className="flex justify-between">
                    {/* Button for "Order Food" tab */}
                    <button
                        onClick={() => handleMainTabChange('orderFood')}
                        className={`py-2 px-6 text-base font-bold ${mainTab === 'orderFood' ? 'bg-blue-500 text-white' : 'bg-white-300 hover:bg-gray-400'}`}
                    >
                        Order Food
                    </button>
                    {/* Button for "Past Orders" tab */}
                    <button
                        onClick={() => handleMainTabChange('pastOrders')}
                        className={`py-2 px-6 text-base font-bold ${mainTab === 'pastOrders' ? 'bg-blue-500 text-white' : 'bg-white-300 hover:bg-gray-400'}`}
                    >
                        Past Orders
                    </button>
                    {/* Button for "Meal Customization" tab */}
                    <button
                        onClick={() => handleMainTabChange('mealCustomization')}
                        className={`py-2 px-6 text-base font-bold ${mainTab === 'mealCustomization' ? 'bg-blue-500 text-white' : 'bg-white-300 hover:bg-gray-400'}`}
                    >
                        Meal Customization
                    </button>
                </div>

                {/* Content below the tabs */}
                <div>
                    {mainTab === 'orderFood' && (
                        // Render sub-tabs and corresponding components for "Order Food" tab
                        <div className="pl-4 pt-4">
                            <button
                                onClick={() => handleSubTabChange('breakfast')}
                                className={`py-2 px-4 text-sm font-bold block w-full text-left ${subTab === 'breakfast' ? 'bg-blue-100 text-black' : 'bg-white-300 hover:bg-blue-200'}`}
                            >
                                Breakfast {subTab === 'breakfast' ? '▲' : '▼'}
                            </button>
                            {subTab === 'breakfast' && <VisualMenuComponent menuDataPath="breakfastMenu.json" />}

                            <button
                                onClick={() => handleSubTabChange('lunch')}
                                className={`py-2 px-4 text-sm font-bold block w-full text-left ${subTab === 'lunch' ? 'bg-blue-100 text-black' : 'bg-white-300 hover:bg-blue-200'}`}
                            >
                                Lunch {subTab === 'lunch' ? '▲' : '▼'}
                            </button>
                            {subTab === 'lunch' && <VisualMenuComponent menuDataPath="lunchMenu.json" />}

                            <button
                                onClick={() => handleSubTabChange('dinner')}
                                className={`py-2 px-4 text-sm font-bold block w-full text-left ${subTab === 'dinner' ? 'bg-blue-100 text-black' : 'bg-white-300 hover:bg-blue-200'}`}
                            >
                                Dinner {subTab === 'dinner' ? '▲' : '▼'}
                            </button>
                            {subTab === 'dinner' && <VisualMenuComponent menuDataPath="dinnerMenu.json" />}
                        </div>
                    )}

                    {mainTab === 'pastOrders' && (
                        // Render past orders component for "Past Orders" tab
                        <div className="p-4">
                            {orderHistory.length > 0 ? (
                                <PastOrders orders={orderHistory} />
                            ) : (
                                <p>No past orders available.</p>
                            )}
                        </div>
                    )}

                    {mainTab === 'mealCustomization' && (
                        // Render meal customization component for "Meal Customization" tab
                        <div className="p-4">
                            <MealCustomization />
                        </div>
                    )}
                </div>
            </div>
            </div>
    );
}

export default MenuTabs;