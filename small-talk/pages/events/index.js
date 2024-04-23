/**
 * 
 */
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import EventsList from "@/app/components/EventsList";
import eventsData from "@/app/data/eventsData";

export const Events = ({data}) =>{
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return(
        <div className='bg-slate-800 text-white'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <EventsList events = {eventsData} />
            </Layout>  
        </div>
    )
}

export default Events;