/**
 * 
 */
 import React, { useState, useEffect } from 'react';
 import Layout from "@/components/layout";
 import MoviesPage from '@/app/components/moviesPage/MoviesPage';
 
 
 export const Movie = ({data}) => {
     const [windowWidth, setWindowWidth] = useState(null);
     
     useEffect(() => {
         setWindowWidth(window.innerWidth);
     },[])
 
     return (
         <div className='bg-slate-800 text-white'>
             <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                 <h1 className="text-center mt-4 mb-4">Movies Page</h1>
                 <MoviesPage />  {/* Here the MoviesPage component is included */}
             </Layout>
         </div>
     )
 }
 
 export default Movie;
 