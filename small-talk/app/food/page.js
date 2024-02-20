"use client"
import Link from 'next/link'
export default function food() {
    // will be navigated to this page after click food button on homepage
    return <Link href="/food">Order Food</Link>

}