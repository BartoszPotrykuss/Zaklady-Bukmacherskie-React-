import React from 'react'
import '../style/NavBar.css'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><a href="/ChampionsLeague">UCL</a></li>
                <li><a href="/PremierLeague">PREMIER LEAGUE</a></li>
                <li><a href="/League1">LEAGUE 1</a></li>
                <li><a href="/Bundesliga">BUNDESLIGA</a></li>
                <li><a href="/SerieA">SERIE A</a></li>
                <li><a href="/LaLiga">LA LIGA</a></li>
            </ul>
        </nav>
    )
}

export default NavBar