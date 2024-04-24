import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import { smolAuth } from "@/components/smolAuth";
import FriendsList from "@/app/components/friends/FriendsList";
import Chatbox from '@/components/Chatbox';

export const getServerSideProps = smolAuth(
    async (_ctx) => {
        return {
            props:{
                
            }
        }   
    }
)

export default function Chat() {
    const [selectedUser, setSelectedUser] = useState(null);
    return (
        <div className='bg-slate-800 text-white'>
        <Layout renderHeader={true}>
            <div className='hidden lg:flex w-full lg:flex-row' style= {{marginTop:'10vh'}}>
                <FriendsList onSelectUser={setSelectedUser} selectedUser={selectedUser}/>
                <Chatbox selectedFriend={selectedUser}/>
            </div>
            <div className='sm:flex sm:flex-col lg:hidden' style= {{marginTop:'10vh'}}>
                <Chatbox selectedFriend={selectedUser}/>
                <FriendsList onSelectUser={setSelectedUser} selectedUser={selectedUser}/>
            </div>
        </Layout>
        </div>
    )
}