"use client"
import Link from 'next/link'
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';

export default function events() {
    return (
        <ThemeLayout>
            <div className="flex flex-row">
                <ul className="m-8 w-full">
                    <li className="border-b border-gray-200 pb-2 mb-10">Events Page</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Current Events</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Upcoming Events</li>
                </ul>
            </div>
        </ThemeLayout>
    );
}