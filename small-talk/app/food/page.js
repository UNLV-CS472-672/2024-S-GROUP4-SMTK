"use client"
import Link from 'next/link'
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';

export default function food() {
    return (
        <ThemeLayout>
            <div className="flex flex-row">
                <ul className="m-8 w-full">
                    <li className="border-b border-gray-200 pb-2 mb-10">Order Food Page</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Today's Menu</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Delivery Time</li>
                </ul>
            </div>
        </ThemeLayout>
    );
}