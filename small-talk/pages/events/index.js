/**
 * 
 */
import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import ListEvents from "@/components/listEvents";

export const Events = () =>{
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return(
        <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
            <ListEvents/>
        </Layout>  
    )
}

export default Events;