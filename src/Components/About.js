import './About.css'

import Nav from './Nav'
import MobNav from './MobNav'
import Shapes from './Shapes'

import useWindowSize from '../hooks/useWindowSize'

export default function About() {

    const { width } = useWindowSize()

    return (
        <section className="about">
            { width > 770 ? <Nav /> : <MobNav />}
            <div className="left">
                <div className="text">
                    <h3>About</h3>
                    <p>While living in rural New South Wales in January, I was extremely bored. I was volunteering at a bushfire recovery camp as a cook, and I spent my days in the commissary kitchen of an old sports ground, sheltering from the heat and rain with all the spiders. <span className="ital">I was longing for the learning that my previous jobs had brought me.</span> There were no scared people dangling from ziplines, and there were no out-of-control skiers getting lost in gullies, there were just Australia's grey nomad population and me. </p>
                    <p>I decided that I needed to get pushed out of my comfort zone. I needed something to commit to, so I chose to sign up for CodeAcademy’s Web Developer Career Path. Every free minute I spent trying to absorb the seemingly infinite knowledge that floats around web dev communities and in those free minutes, I fell in love with coding. </p>
                    <p>In the past 12 weeks with General Assembly, <span className="ital">I have learned more than I previously thought was possible,</span> and now, I want to continue my learning in a remote, team environment working on varied projects at a fast pace. I am looking forward to having the opportunity to learn from knowledgeable teammates on a daily basis.</p>
                </div>
            </div>
            <Shapes />
        </section>
    )
}