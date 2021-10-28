import './Contact.css'
import ConButton from './ConButton'
import EmailButton from './EmailButton'
import MobNav from './MobNav'
import Nav from './Nav'
import Shapes from './Shapes'

import useWindowSize from '../hooks/useWindowSize'

export default function Contact() {

    const { width } = useWindowSize()

    return (
        <section className="contact-wrap">
            {width < 770 ? <MobNav /> : <Nav />}
            <section className="contact">
                <div className="upper">
                    <h2>Chat with Me</h2>
                    <h3>Topics could include:</h3>
                    <ul>
                        <li>cooking</li>
                        <li>skiing</li>
                        <li>climbing</li>
                        <li>coding</li>
                        <li>work</li>                    
                        <li>diving</li>                    
                    </ul>
                </div>
                <div className="lower">
                    <ConButton link="https://www.linkedin.com/in/sarah-leah-andreas/" text="LinkedIn" color="#b71c1c"/>
                    <ConButton link="https://github.com/sarahleah/" text="Github" color="#1565c0"/>
                    <EmailButton text="Email" color="#f9a825"/>
                </div>
            </section>
            <Shapes />
        </section>
    )
}