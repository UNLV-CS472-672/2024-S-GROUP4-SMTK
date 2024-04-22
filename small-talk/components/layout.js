import "@/styles/globals.css";
import Footer from "./footer";
import Header from "./header";
import React, { useState } from "react";
import { Tabs } from "./data";


const Layout = ({ children, width, renderFooter = true, renderHeader = false }) => {
    const [modalIsOpen, setModalIsOpen ] = useState(false);

    return (
        <>
            <div className='w-full flex flex-col items-center min-h-screen'> {/* Replace h-screen with min-h-screen */}
                {renderHeader ? <Header width={width} isOpen={modalIsOpen} setIsOpen={setModalIsOpen}></Header> : <></>}

                <div className='flex-grow flex flex-col w-full lg:w-[1024px]'> {/* Removed h-full to allow content to define height */}
                    {width < 1024 && modalIsOpen ? 
                        Tabs.map((v, idx) => (
                            <a key={idx} href={v.slug}>
                                <div className={`flex flex-col justify-center text-center text-white h-[128px] bg-gradient-to-r ${v.color}`}>
                                    {v.name}
                                </div>
                            </a>
                        ))
                        :
                        children}
                </div>

                {renderFooter ? <Footer></Footer> : <></>}
            </div>
        </>
    );
}

export default Layout;
