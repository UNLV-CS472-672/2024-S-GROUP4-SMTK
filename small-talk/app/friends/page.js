"use client"
import Link from 'next/link'
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';

export default function friends() {
    return (
        <ThemeLayout>
            <div className="flex flex-row">
                <ul className="m-8 w-full">
                    <li className="border-b border-gray-200 pb-2 mb-10">Friends Page</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">List of Friends</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Chatrooms</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Recommended Users</li>
                </ul>
            </div>
        </ThemeLayout>
    );
}