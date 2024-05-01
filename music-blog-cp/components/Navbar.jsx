import React, { useState } from 'react';


export default function Navbar() {
    return <nav className="nav">
        <a href="/home" className="site-title">Harmonic Haven</a>
        <ul>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <a href="/profile">Profile</a>
            </li>
    </ul>
    </nav >
}

