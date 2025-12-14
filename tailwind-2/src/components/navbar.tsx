import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
    {
        href: "/founders",
        label: "Founders",
    },
    {
        href: "/guide",
        label: "Guide",
    },
    {
        href: "/pricing",
        label: "Pricing",
    },
    {
        href: "/login",
        label: "Login",
    },
];

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between py-4'>
            <Link href={"/"}>
                <Image src="logo.svg" alt='image' width={80} height={22} draggable={false} loading='lazy'></Image>
            </Link>
            <div className="flex gap-8 items-center">
                {
                    links.map((link, index) => (
                        <Link
                            className='text-neutral-800 font-medium hover:text-neutral-500 transition duration-300'
                            key={index}
                            href={link.href}>
                            {link.label}
                        </Link>
                    ))
                }
                <button className='bg-[#2679f3] text-white w-[100px] h-[40px] rounded-md shadow-lg text-shadow-md tracking-wide font-bold'>Get started</button>
            </div>
        </nav>
    )
}            
