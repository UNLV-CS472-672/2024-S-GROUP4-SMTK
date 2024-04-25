import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import { smolAuth } from "@/components/smolAuth";
import FriendsList from "@/app/components/friends/FriendsList";
import { getCookie } from "@/util/smolCookie";
import Chatbox from '@/components/Chatbox';
import Title from '@/components/title.js';
import React from 'react';

export const getServerSideProps = smolAuth(
    async (_ctx) => {
        console.log("/chat getServerSideProps: Entered")
        const { req } = _ctx;
        let response = null;
        if (req.headers.cookie) {
            
            console.log("/chat getServerSideProps: Cookie Exists")
            console.log("/chat getServerSideProps: Cookies - " + req.headers.cookie);
            const session_id = getCookie("session_id", req.headers.cookie);
            console.log("/chat getServerSideProps: session_id: " + session_id)
            response = await fetch("http://" + req.headers.host + "/api/getUser/", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : session_id
                }
            })
            let json = (await response.json());
            console.log("/chat getServerSideProps JSON OUTPUT: " + JSON.stringify(json));
            if (json) {
                console.log("/chat getServerSideProps: RETURN RESPONSE")
                return {
                    props:{
                        user : json
                    }
                };
            }
        }
        return {
            props:{
                user: response
            }
        }   
    }
)

// ai-gen start (ChatGPT-4, 2)


export default function Chat({user}) {
    const [selectedUser, setSelectedUser] = useState(null);
    
    return (
        <div className='bg-slate-800 text-white'>
        <Layout renderHeader={true}>
            <Title page="Chat"/>
            <div className='hidden lg:flex w-full lg:flex-row'>
                <FriendsList onSelectUser={setSelectedUser} selectedUser={selectedUser}/>
                <Chatbox userName={user.username} selectedFriend={selectedUser}/>
            </div>
            <div className='sm:flex sm:flex-col lg:hidden'>
                <Chatbox userName={user.username} selectedFriend={selectedUser}/>
                <FriendsList onSelectUser={setSelectedUser} selectedUser={selectedUser}/>
            </div>
        </Layout>
        </div>
    )
}

// ai-gen end