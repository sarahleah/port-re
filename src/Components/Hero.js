import './Hero.css'
import Name from './Name'
import Nav from './Nav'
import Shapes from './Shapes'

import useWindowSize from '../hooks/useWindowSize'

export default function Hero() {

    let { width } = useWindowSize()

    console.log(width)

    return (
        <header>
            { width >= 770 && <Nav /> }
            <Name />
            <Shapes />
            { width < 770 && <Nav /> }
        </header>
    )
}