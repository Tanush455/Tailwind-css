import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const links = [
        { title: "Fintech", href: "#" },
        { title: "Product", href: "#" },
        { title: "Resources", href: "#" }
    ]

    return (
        <div className='navbar-root'>
            <div className='logo'>
                Ai Priced
            </div>
            <div className='links'>   
            {links.map((el, index) => (
                <Link key ={index} href={el.href} className='links-items'>
                        {el.title}
                    </Link>
            ))}
            <button className='nav-button'>Start Free trial</button>
            </div>
        </div>
    )
}
