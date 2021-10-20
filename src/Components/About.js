import './About.css'
import Nav from './Nav'
import Skills from './Skills'
import Shapes from './Shapes'

export default function About() {
    return (
        <section className="about">
            <div className="left">
                <div className="text">
                    <h3>About</h3>
                    <p>I'm a software engineer with a background in the outdoors industry. I'm passionate about all things programming, and have a proven proclivity for problem solving. </p>
                </div>
                <Skills />
            </div>
            <Nav />
            <Shapes />
        </section>
    )
}