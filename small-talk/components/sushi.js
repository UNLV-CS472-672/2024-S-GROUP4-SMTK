import React, { useState } from 'react';

export const Sushi = ({isOpen, setIsOpen}) => {

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="lg:px-0 px-5 text-xl" onClick={toggleModal}>
                ☰
            </button>

        </div>
    )
}

export default Sushi;