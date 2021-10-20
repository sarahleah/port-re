import './Projects.css'
import Project from './Project'
import Nav from './Nav'
import Shapes from './Shapes'

import bluebird from '../imgs/bluebird.png'
import ticTacToe from '../imgs/tictactoe.png'
import liveDuckiLive from '../imgs/liveDuckLive.png'

export default function Projects() {
    return (
        <section className="projects-wrap">
            <section className="projects">
                <Project 
                    title="blueBird"
                    img={bluebird} 
                    stack={['ruby', 'js','sinatra', 'psql', 'css']} 
                    description="This app is based around the idea of 'instagram for adventurers.' It was built over the course of three days, and allows users to share their adventures."
                    live="https://morning-caverns-79562.herokuapp.com/"
                    github="https://github.com/sarahleah/blue_bird"> </Project>
                <Project 
                    title="Live Ducki, Live!"
                    img={liveDuckiLive}
                    stack={['react', 'js','css']} 
                    description="Created in a single day during the New Futures Hackathon for water security. We worked as a team of two devs and two UXers to create a water saving game. My first project using React and I absolutely loved it."
                    live="https://devpost.com/software/live-ducki-live"
                    github="https://github.com/KPRATT11/WSHackathon"> </Project>
                <Project 
                    title="ticTacToe"
                    img={ticTacToe}
                    stack={['js','html', 'css']} 
                    description="My first project during my bootcamp. It includes colour changing when the spacebar is pressed and several customizeable features. "
                    live="https://sarahleah.github.io/ticTacToe/"
                    github="https://github.com/sarahleah/ticTacToe"> </Project>
            </section>
            <Nav dir="horiz"/>
            <Shapes />
        </section>
    )
}