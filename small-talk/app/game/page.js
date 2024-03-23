"use client"
import Link from 'next/link'
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';

export default function games() {
    return (
        <ThemeLayout>
            <div className="flex flex-row">
                <ul className="m-8 w-full">
                    <li className="border-b border-gray-200 pb-2 mb-10">Games Page</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Singleplayer Games</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Multiplayer Games</li>
                </ul>
            </div>
        </ThemeLayout>
    );
}