import React from 'react';
import Link from 'next/link';

export const Logo = () => {
    return (
        <div className="sm:flex items-center justify-center">
            <Link href="/homepage">
                <img src="/img/logo-no_font.png" className="w-5" alt="Logo"/>
            </Link>
        </div>
        
    )
}

export default Logo;