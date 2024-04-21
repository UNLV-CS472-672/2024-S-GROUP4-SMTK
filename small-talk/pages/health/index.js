import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";
import MedicationSchedule from '../../app/components/healthPage/MedicationSchedule';  // Adjust the path as necessary

export const Health = ({data}) => {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <div className='bg-slate-800 text-white'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <h1>Health Page</h1>
                <MedicationSchedule />  {/* Insert the medication schedule component */}
            </Layout>
        </div>
    )
}

export default Health;
