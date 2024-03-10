import React, { useState } from "react";

const handleRedirect = (path) => () => {
    window.location.href = path;
}

const TopBar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }
    
    return (
        <div className="flex flex-row fixed top-0 h-[15%] w-full bg-[#3CAFFF]">
            <img src="/img/three-bar.png" alt="Tab" style={{ height: '50%', marginLeft: '2%', marginTop: '2%' }}/>
            <button onClick={handleRedirect('/homepage')} style={{ display: 'block', marginLeft: '2%', marginTop: '0.5%', marginBottom: '0.5%' }}><img src="/img/logo.png" alt="Logo" style={{ height: '100%' }}/></button>
            <img src="/img/notif-icon.png" alt="Notifications" style={{ height: '65%', marginLeft: 'auto', marginRight: '1%', marginTop: 'auto', marginBottom: '0.5%' }}/>

            {/* Profile Dropdown Menu */}
            <button onClick={toggleDropdown} style={{ display: 'block', marginRight: '2%', marginTop: '0.5%', marginBottom: '0.5%' }}><img src="/img/profile-temp.png" alt="Profile" style={{ height: '100%' }}/></button>
            {isDropdownVisible && (
                <div className="absolute right-0 mt-[8%] mr-[1%] py-[1%] w-[11%] bg-white rounded-lg">
                    <button onClick={handleRedirect('/profile')} className="block px-[10%] py-[5%] text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Profile</button>
                    <button onClick={handleRedirect('/setting')} className="block px-[10%] py-[5%] text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Settings</button>
                    <button onClick={handleRedirect('/')} className="block px-[10%] py-[5%] text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Logout</button>
                </div>
            )}
        </div>
    );
};

export default TopBar;