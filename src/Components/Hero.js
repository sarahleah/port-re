import './Hero.css'
import Name from './Name'
import Nav from './Nav'
import Shapes from './Shapes'

export default function Hero() {
    return (
        <header>
            <Nav />
            <Name />
            <Shapes />
        </header>
    )
}