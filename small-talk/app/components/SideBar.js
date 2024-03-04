import SidebarButton from "./SidebarButton";

const SideBar = () => {
    //List of JSON elements that define the details for each button that exists on the sidebar.
    const buttons = [
        { redirect: '/health', imgSrc: '/img/health-tab.png', altText: 'Health', width: '45%', height: 'auto', marginLeft: '7%' },
        { redirect: '/events', imgSrc: '/img/event-tab.png', altText: 'Events', width: '60%', height: 'auto', marginLeft: '15%' },
        { redirect: '/chat', imgSrc: '/img/chat-tab.png', altText: 'Chat', width: '60%', height: 'auto', marginLeft: '10%' },
        { redirect: '/friends', imgSrc: '/img/friend-tab.png', altText: 'Friends', width: '60%', height: 'auto', marginLeft: '5%' },
        { redirect: '/movie', imgSrc: '/img/media-tab.png', altText: 'Movies', width: '60%', height: 'auto', marginLeft: '12%' },
        { redirect: '/food', imgSrc: '/img/food-tab.png', altText: 'Order Food', width: '65%', height: 'auto', marginLeft: '10%' },
        { redirect: '/game', imgSrc: '/img/games-tab.png', altText: 'Games', width: '45%', height: 'auto', marginLeft: '5%' },
      ];

    return (
        <div className="flex flex-col items-start fixed top-[15%] h-[85%] w-[15%]">
          {buttons.map((button, index) => (
            <SidebarButton key={index} {...button} />
          ))}
        </div>
    );
}

export default SideBar;