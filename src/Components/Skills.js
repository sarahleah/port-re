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

export default function Skills() {
    return (
        <section className="skills">
            <h3>Some Things I've Worked With Before</h3>
            <section className="skills-logos">
                <img src={reactLogo} alt="" />
                <img src={rubyLogo} alt="" />
                <img src={nodeLogo} alt="" />
                <img src={githubLogo} alt="" />
                <img src={cssLogo} alt="" />
                <img src={psqlLogo} alt="" />
                <img src={jsLogo} alt="" />
                <img src={postmanLogo} alt="" />
                <img src={sassLogo} alt="" />
            </section>
            <h5 className="learn">willing (and excited) to learn anything</h5>
        </section>
    )
}