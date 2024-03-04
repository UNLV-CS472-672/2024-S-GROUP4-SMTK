import React from "react";

const handleRedirect = (path) => () => {
    window.location.href = path;
}

const TopBar = () => {
    return (
        <div className="flex flex-row fixed top-0 h-[15%] w-full bg-[#3CAFFF]">
            <img src="/img/three-bar.png" alt="Tab" style={{ height: '50%', marginLeft: '2%', marginTop: '2%' }}/>
            <img src="/img/logo.png" alt="Logo" style={{ marginLeft: '2%', marginTop: '0.5%', marginBottom: '0.5%' }}/>
            <button onClick={handleRedirect('/')} style={{ display: 'block', marginLeft: 'auto', marginRight: '1%', marginTop: '1%' }}><img src="/img/logout-icon.png" alt="Logout" style={{height: '75%'}}/></button>
            <button onClick={handleRedirect('/setting')} style={{ display: 'block', marginRight: '1%', marginTop: '1%' }}><img src="/img/notif-icon.png" alt="Notifications" style={{height: '75%'}}/></button>
            <button onClick={handleRedirect('/profile')} style={{ display: 'block', marginRight: '2%', marginTop: '0.5%', marginBottom: '0.5%' }}><img src="/img/profile-temp.png" alt="Profile" style={{height: '100%'}}/></button>
        </div>
    );
};

export default TopBar;