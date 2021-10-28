import './Projects.css'
import Project from './Project'
import Nav from './Nav'
import Shapes from './Shapes'
import MobNav from './MobNav'

import bluebird from '../imgs/bluebird.png'
import ticTacToe from '../imgs/tictactoe.png'
import liveDuckiLive from '../imgs/liveDuckLive.png'
import gracieux from '../imgs/graciuex.png'

import useWindowSize from '../hooks/useWindowSize'

export default function Projects() {

    const { width } = useWindowSize()

    return (
        <section className="projects-wrap">
            { width > 770 ? <Nav /> : <MobNav />}
            <section className="projects">
                <Project 
                    title="gracieux"
                    img={gracieux}
                    stack={['react', 'js','react-router-dom']} 
                    description="This was an experiment in using a mix of apis to generate content. It uses two of the Chicago Art Institute's apis, as well as a combination of Wiki apis. Learned about memory leaks, custom hooks, and parsing secondhand HTML."
                    live="https://gracieux.surge.sh/"
                    github="https://github.com/sarahleah/gracieux"> </Project>
                <Project 
                    title="Live Ducki, Live!"
                    img={liveDuckiLive}
                    stack={['react', 'js','css']} 
                    description="Created in a single day during the New Futures Hackathon for water security. We worked as a team of two devs and two UXers to create a water saving game. My first project using React and I absolutely loved it."
                    live="https://devpost.com/software/live-ducki-live"
                    github="https://github.com/KPRATT11/WSHackathon"> </Project>
                <Project 
                    title="blueBird"
                    img={bluebird} 
                    stack={['ruby', 'js','sinatra', 'psql', 'css']} 
                    description="This app is based around the idea of 'instagram for adventurers.' It was built over the course of three days, and allows users to share their adventures."
                    live="https://morning-caverns-79562.herokuapp.com/"
                    github="https://github.com/sarahleah/blue_bird"> </Project>
                <Project 
                    title="ticTacToe"
                    img={ticTacToe}
                    stack={['js','html', 'css']} 
                    description="My first project during my bootcamp. It includes colour changing when the spacebar is pressed and several customizeable features. "
                    live="https://sarahleah.github.io/ticTacToe/"
                    github="https://github.com/sarahleah/ticTacToe"> </Project>
            </section>
            <Shapes />
        </section>
    )
}