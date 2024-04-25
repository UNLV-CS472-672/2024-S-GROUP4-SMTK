//import Announcements from "@/components/announcements";
import Layout from "@/components/layout";
import { smolAuth } from "@/components/smolAuth";
//import Welcome from "@/components/welcome";
import { getCookie } from "@/util/smolCookie";
import React, { useEffect, useState } from "react";
/*
export const getServerSideProps = smolAuth(
    async(_ctx) => {
        return {
            props: {}
        }
    }
)
*/

export const getServerSideProps = smolAuth(
    async(_ctx) => {
    // get announcements
    const {req} = _ctx;

    const session_id = getCookie("session_id", req.headers.cookie);
    /*
    const homeblob = await fetch("http://" + req.headers.host + "/api/home/", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : session_id
        }
    })
    */
    let userdata = {
        announcements: [],
        user: {}
    } //await homeblob.json();

    return {
        props: {
            data: {
                announcements: userdata.announcements,
                user: userdata.user
            }
        }
    }
})

export const Home = ({data}) => {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <div className='bg-slate-800'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Blank Page</h2>
            </Layout>
        </div>
    )
}
/*
        <div className='bg-slate-800'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <Welcome data={data.user}/>
                <Announcements data={data.announcements}/>
            </Layout>
        </div> 
*/
export default Home;