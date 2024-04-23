import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";
import MedicationSchedule from '../../app/components/healthPage/MedicationSchedule';
import HealthcareTeam from '@/app/components/healthPage/HealthcareTeam';
import PatientReport from '@/app/components/healthPage/PatientReport';
import Title from '@/components/title.js';

export const Health = () => {
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <div className='bg-slate-800 flex flex-col min-h-screen'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <div className="flex-grow p-4">  {/* Added padding for all sides */}
                    <Title page="Health"/>
                    <div className="space-y-10"> {/* This will add space between each component */}
                        <MedicationSchedule />
                        <HealthcareTeam />
                        <PatientReport />
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Health;
