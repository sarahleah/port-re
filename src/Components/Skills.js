import './Skills.css'

import reactLogo from '../logos/react.png'
import rubyLogo from '../logos/ruby.png'
import nodeLogo from '../logos/node.png'
import githubLogo from '../logos/github.png'
import cssLogo from '../logos/css.png'
import psqlLogo from '../logos/psql.png'
import jsLogo from '../logos/js.png'
import postmanLogo from '../logos/postman.png'
import sassLogo from '../logos/sass.png'
import pythonLogo from '../logos/python.png'

import useWindowSize from '../hooks/useWindowSize'
import MobNav from './MobNav'
import Nav from './Nav'

export default function Skills() {

    const { width } = useWindowSize()
    
    let logos = [reactLogo, rubyLogo, nodeLogo, githubLogo, cssLogo, psqlLogo, jsLogo, postmanLogo, sassLogo, pythonLogo]
    let alts = 'react ruby node github css psql javascript postman sass python'.split(' ')
    let imgDeets = logos.map((logo, i) => {return {src: logo, alt: alts[i]}})
    
    return (
        <section className="skills-wrap">
            { width > 770 ? <Nav /> : <MobNav />}
            <section className="skills">
                <h3>Some Things I've Worked With Before</h3>
                <section className="skills-logos">
                    { imgDeets.map(img => {
                        return (
                            <img src={img.src} alt={img.alt} />
                        )
                    }) }
                </section>
                <h5 className="learn">willing (and excited) to learn anything</h5>
            </section>
        </section>
    )
}