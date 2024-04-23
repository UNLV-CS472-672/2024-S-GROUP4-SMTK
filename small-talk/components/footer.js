import React, { useState } from 'react';


export const Footer = () => {
    // return (
    //     <div className="flex flex-col items-center w-screen h-[24px] text-slate-50 bg-slate-700 fixed bottom-0">
    //         SmallTalk © {new Date().getFullYear()}
    //     </div>
    // )
    const goPP = () => {
        window.location.href = "/privacyPolicy"; // Redirect to the login
    }
    
    return (
        <div className="flex flex-col items-center justify-between w-screen h-[24px] text-slate-50 bg-slate-700 fixed bottom-0 px-4">
            <div>
                SmallTalk © {new Date().getFullYear()} |
                {' '}{' '}{' '}
                {/* Button to toggle the popup */}
                <button
                    id="PrivacyPolicyButton"
                    type="button" 
                    onClick={goPP} // Call the togglePopup function
                >
                    {"Privacy Policy"}
                </button>
            </div>
        </div>
    );
}

export default Footer;


