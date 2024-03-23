"use client"
import Link from 'next/link'
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';

export default function movie() {
    return (
        <ThemeLayout>
            <div className="flex flex-row">
                <ul className="m-8 w-full">
                    <li className="border-b border-gray-200 pb-2 mb-10">Movies Page</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">List of Media Applications</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">List of Friends currently watching</li>
                </ul>
            </div>
        </ThemeLayout>
    );
}