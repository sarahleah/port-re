import './Contact.css'
import ConButton from './ConButton'
import EmailButton from './EmailButton'
import Nav from './Nav'
import Shapes from './Shapes'

export default function Contact() {
    return (
        <section className="contact-wrap">
            <section className="contact">
                <h2>Contact</h2>
                <div className="lower">
                    <ConButton link="https://www.linkedin.com/in/sarah-leah-andreas/" text="LinkedIn" color="#b71c1c"/>
                    <ConButton link="https://github.com/sarahleah/" text="Github" color="#1565c0"/>
                    <EmailButton text="Email" color="#f9a825"/>
                </div>
            </section>
            <Nav dir="horiz"/>
            <Shapes />
        </section>
    )
}