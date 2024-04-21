import React from 'react'
import '../style/NavBar.css'

const NavBar = () => {

    const leagues = [
        { name: 'UCL', url: '/ChampionsLeague' },
        { name: 'PREMIER LEAGUE', url: '/PremierLeague', dataTest: 'premier-league-link' },
        { name: 'LEAGUE 1', url: '/League1' },
        { name: 'BUNDESLIGA', url: '/Bundesliga' },
        { name: 'SERIE A', url: '/SerieA' },
        { name: 'LA LIGA', url: '/LaLiga' }
    ];

    return (
        <nav className='navbar'>
            <ul>
            {leagues.map((league, index) => (
                    <li key={index}>
                        <a href={league.url} data-test={league.dataTest}>
                            {league.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar