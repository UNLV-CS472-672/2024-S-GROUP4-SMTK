import React from "react";
import Link from 'next/link'
import HoverButton from "./HoverButton";

const handleRedirect = (path) => () => {
    window.location.href = path;
}

const SideBar = () => {
    return (
        <div className="flex flex-col items-start fixed top-[15%] h-[85%] w-[15%]">
            <HoverButton onClick={handleRedirect('/health')}><img src="/img/health-tab.png" alt="Health" style={{width: '45%', height: 'auto', marginLeft: '7%'}}/></HoverButton>
            <HoverButton onClick={handleRedirect('/events')}><img src="/img/event-tab.png" alt="Events" style={{width: '60%', height: 'auto', marginLeft: '15%'}}/></HoverButton>
            <HoverButton onClick={handleRedirect('/chat')}><img src="/img/chat-tab.png" alt="Chat" style={{width: '60%', height: 'auto', marginLeft: '10%'}}/></HoverButton>
            <HoverButton onClick={handleRedirect('/friends')}><img src="/img/friend-tab.png" alt="Friends" style={{width: '60%', height: 'auto', marginLeft: '5%'}}/></HoverButton>
            <HoverButton onClick={handleRedirect('/movie')}><img src="/img/media-tab.png" alt="Movies" style={{width: '60%', height: 'auto', marginLeft: '12%'}}/></HoverButton>
            <HoverButton onClick={handleRedirect('/food')}><img src="/img/food-tab.png" alt="Order Food" style={{width: '65%', height: 'auto', marginLeft: '10%'}}/></HoverButton>
            <HoverButton onClick={handleRedirect('/game')}><img src="/img/games-tab.png" alt="Games" style={{width: '45%', height: 'auto', marginLeft: '5%'}}/></HoverButton>
        </div>
    );
};

export default SideBar;