import React from 'react';
import { Link } from 'react-router-dom';
import css from './Navbar.module.css';

export default function Navbar() {
  
    const navItems = [
        {
            title: "About Me",
            link: "/react-portfolio"
        },
        {
            title: "Projects",
            link: "/react-portfolio/projects"
        },
        {
            title: "Contact",
            link: "/react-portfolio/contact"
        }
    ]
  
    return (
    <ul className={css.navbar}>
        {navItems.map((item) => (
        <li key={item.title}>
            <Link to={item.link}>{item.title}
            </Link>
        </li>
        ))}
        
    </ul>
  )
}
