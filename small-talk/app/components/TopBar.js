import React, { useState } from "react";
import Link from "next/link";

const handleRedirect = (path) => () => {
    window.location.href = path;
}

const TopBar = ({ toggleSidebar }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }
    
    return (
        <div className="flex flex-row fixed top-0 h-[15%] w-full bg-[#3CAFFF]">
            <button onClick={toggleSidebar} className="ml-[2%] mt-[0.5%]"><img src="/img/three-bar.png" alt="Tab" style={{ height: '50%' }}/></button>
            <button onClick={handleRedirect('/homepage')} style={{ display: 'block', marginLeft: '2%', marginTop: '0.5%', marginBottom: '0.5%' }}><img src="/img/logo.png" alt="Logo" style={{ height: '100%' }}/></button>
            <img src="/img/notif-icon.png" alt="Notifications" style={{ height: '65%', marginLeft: 'auto', marginRight: '1%', marginTop: 'auto', marginBottom: '0.5%' }}/>

            {/* Profile Dropdown Menu */}
            <button onClick={toggleDropdown} style={{ display: 'block', marginRight: '2%', marginTop: '0.5%', marginBottom: '0.5%' }}><img src="/img/profile-temp.png" alt="Profile" style={{ height: '100%' }}/></button>
            {isDropdownVisible && (
                <div className="absolute right-0 mt-[8%] mr-[1%] py-[1%] w-[11%] bg-white rounded-lg">
                    <ul>
                        <li className="flex block px-[10%] py-[5%] text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <img src="/img/profile-icon.png" style={{ marginLeft: "2%", width: "15%" }}/>
                            <Link href="/profile" className="ml-[11%] mt-[2%]">Profile</Link>
                        </li>
                        <li className="flex block px-[10%] py-[5%] text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <img src="/img/setting-icon.png" style={{ width: "20%" }}/>
                            <Link href="/setting" className="ml-[7.5%] mt-[2%]">Setting</Link>
                        </li>
                        <li className="flex block px-[10%] py-[5%] text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <img src="/img/logout-icon.png" style={{ width: "20%" }}/>
                            <Link href="/" className="ml-[7.5%] mt-[1%]">Logout</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TopBar;