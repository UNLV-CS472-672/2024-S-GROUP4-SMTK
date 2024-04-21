import React from "react";
import Link from 'next/link';

const SB_ExpandButton = ({ redirect, imgSrc, altText, textClass, imageClass, backgroundColor }) => {
    return (
        <div data-testid="expand-button" style={{ backgroundColor }}>
            <Link href={ redirect }>
                <img src={ imgSrc } alt={ altText } className={ imageClass }/>
                <p className={ textClass }>{ altText }</p>
            </Link>
        </div>
    );
};

export default SB_ExpandButton;