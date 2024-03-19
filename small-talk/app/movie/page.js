"use client"
import Link from 'next/link'
export default function movie() {
    // will be navigated to this page after click movies button on homepage
    return <Link href="/movie">Movies</Link>

}