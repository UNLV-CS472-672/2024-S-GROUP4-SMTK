/**
 * 
 */
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";

export const Movie = ({data}) => {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <div className='bg-slate-800 text-white'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <h3>Movies Page</h3>
            </Layout>
        </div>
    )
}

export default Movie;