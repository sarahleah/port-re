import './MobNav.css'

import Nav from './Nav'
import openNav from '../icons/nav.png'
import closeNav from '../icons/close.png'

import { useState } from 'react/cjs/react.development'

export default function MobNav() {

    const [ expanded, setExpanded ] = useState(false)

    function handleToggleExpandoNav3000() {
        setExpanded(!expanded)
    }

    let img

    if (expanded) {
        img = closeNav
    } else {
        img = openNav
    }

    return (
        <button 
            onClick={handleToggleExpandoNav3000} className="mob-nav">
            <img 
                src={img} 
                alt={'open nav'} 
                className="mob-nav-icon"
                />
            {expanded && <Nav />}
        </button>
    )
}