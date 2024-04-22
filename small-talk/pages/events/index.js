/**
 * 
 */
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";

export const Events = ({data}) =>{
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return(
        <div className='bg-slate-800 text-white'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <h1 className = 'font-bold'>Today's Events</h1>
                <ul className = 'divide-y divide-solid'>
                    <li className = 'list-disc'>
                        <ul>
                            <li>2024-5-2</li>
                            <li>Toy Drive</li>
                            <li>Toys donated to the hospital will be distributed to patients starting at 12:00pm.</li>
                        </ul>
                    </li>
                    <li className = 'list-disc'>
                        <ul>
                            <li>2024-5-2</li>
                            <li>Meetup with Timmy</li>
                            <li>Timmy and I will hangout together and play Roblox!!</li>
                        </ul>
                    </li>
                </ul>

                <h1 className = 'font-bold pt-10'>Upcoming Events</h1>
                <ul className = 'divide-y divide-solid'>
                    <li className = 'list-disc'>
                        <ul>
                            <li>2024-5-5</li>
                            <li>Therapy Dog Visit</li>
                            <li>Therapy dogs from the local dog trainer will visit the hospital at 10:00am.</li>
                        </ul>
                    </li>
                    <li className = 'list-disc'>
                        <ul>
                            <li>2024-5-9</li>
                            <li>Doctor's Appointment</li>
                            <li>I have my regular appointment with Doctor Lee today, don't forget!!</li>
                        </ul>
                    </li>
                    <li className = 'list-disc'>
                        <ul>
                            <li>2024-5-11</li>
                            <li>Amy's Birthday!</li>
                            <li>Today is Amy's birthday!! We're going to have so much fun!!!</li>
                        </ul>
                    </li>
                    <li className = 'list-disc'>
                        <ul>
                            <li>2024-5-17</li>
                            <li>CUPCAKE DAY!!</li>
                            <li>CUPCAKES!!!!!!!!!!!</li>
                        </ul>
                    </li>
                </ul>
            </Layout>  
        </div>
    )
}

export default Events;