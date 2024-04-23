import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout";

export const PP = ({data}) => {
    const [windowWidth, setWindowWidth] = useState(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <div className='bg-slate-800 text-white'>
            <Layout width={windowWidth} renderHeader={true} renderFooter={true}>
                <h2 className="text-2xl font-semibold text-white mb-1">Privacy Policy</h2>

                <h3 className="text-s text-white mb-6">SmallTalk is committed to protecting the privacy of our users. 
                This Privacy Policy outlines how we collect, use, disclose, and protect the personal information you provide to us through our web app.</h3>
                
                <h9 className="text-2xl font-semibold text-white mb-1">Information We Collect</h9>
                <h4>We collect personal information that you voluntarily provide to us when using our web app. This may include:</h4> 
                

                <h4>• Name</h4>
                <h4>• Email address</h4>
                <h4>• Age or date of birth (if applicable)</h4>
                <h3 className="text-s text-white mb-6">• Any other information you choose to provide.</h3>
                <h4 className="text-2xl font-semibold text-white mb-1">How We Use Your Information</h4>

                <h3 className="text-s text-white mb-1">We may use the personal information we collect for the following purposes:</h3>

                <h4>• To provide and personalize our services to you</h4>
                <h4>• To communicate with you about your account or our services</h4>
                <h4>• To improve our web app and develop new features</h4>
                <h4>• To comply with legal obligations</h4>
                <h4 className="text-s text-white mb-6">• To protect the security and integrity of our web app</h4>
                <h2 className="text-2xl font-semibold text-white mb-1">Disclosure of Your Information</h2>

                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:

                <h4>• When required by law or in response to a legal process</h4>
                <h4>• To enforce our site policies or protect our rights, property, or safety</h4>
                <h4 className="text-s text-white mb-6">• In connection with a merger, acquisition, or sale of assets</h4>
                <h2 className="text-2xl font-semibold text-white mb-1">Data Storage</h2>

                <h4 className="text-s text-white mb-6">We store your personal information securely using MongoDB, a third-party database service provider. 
                Your information may be stored on servers located in various locations around the world.</h4>

                <h2 className="text-2xl font-semibold text-white mb-1">Data Security</h2>

                <h4 className="text-s text-white mb-6">We take reasonable measures to protect the security and integrity of your personal information. 
                However, please note that no method of transmission over the internet or electronic storage is 100% secure.</h4>

                <h2 className="text-2xl font-semibold text-white mb-1">Changes to This Privacy Policy</h2>

                <h4 className="text-s text-white mb-6">We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective 
                immediately upon posting the revised Privacy Policy on our website.</h4>

                <h2 className="text-2xl font-semibold text-white mb-1">Contact Us</h2>

                <h4 className="text-s text-white mb-6">If you have any questions or concerns about our Privacy Policy, please contact us at smalltalk@gmail.com</h4>
            </Layout>
        </div>
    )
}

export default PP;