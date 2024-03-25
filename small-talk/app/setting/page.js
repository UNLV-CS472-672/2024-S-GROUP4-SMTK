"use client"
import Link from 'next/link';
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';

export default function setting() {
     // will be navigated to this page after click settings button on homepage
     return (
        <ThemeLayout>
            <div className="flex flex-row">
                <ul className="m-8 w-full">
                    <li className="border-b border-gray-200 pb-2 mb-10">Settings Page</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Light and Dark Theme</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Update Information</li>
                </ul>
            </div>
        </ThemeLayout>
    );
}