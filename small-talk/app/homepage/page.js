"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const handleRedirect = (path) => () => {
    window.location.href = path;
}

export default function Homepage() {
    return (
        <div className="homePageContainer">
            {/* header for homepage */}
            <h1 className="header">Welcome to Homepage</h1>
            <div>
                <TopBar/>
            </div>
            <div>
                <SideBar/>
                <div>

                </div>
            </div>
            {/* <img src="/img/agenda.jpeg" altText="Agenda" style={{ height: '175px', width: '1000px', marginTop: '150px', marginLeft: '500px' }}/>
            <img src="/img/calendar.png" altText="Calendar" style={{ width: '1000px', height: '500px', marginTop: '30px', marginLeft: '500px' }}/> */}
        </div>
    );
}
