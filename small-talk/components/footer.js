import React from 'react';

export const Footer = () => {
    return (
        <div className="flex flex-col items-center w-screen h-[24px] text-slate-50 bg-slate-700 fixed bottom-0">
            SmallTalk © {new Date().getFullYear()}
        </div>
    )
}

export default Footer;