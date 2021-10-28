import './Nav.css'

import AncButton from './AncButton'

export default function Nav(props) {

    let style = {}

    if (props.dir) {
        style = {
            flexDirection: 'row',
            height: 'fit-content',
            width: '100%'
        }
    }

    return (
        <div className="buttons" style={style}>
            <AncButton link="/" text="Home" color="#2e7d32"/>
            <AncButton link="/about" text="About" color="#b71c1c"/>
            <AncButton link="/projects" text="Projects" color="#1565c0"/>
            <AncButton link="/skills" text="Skills" color="#f9a825"/>
            <AncButton link="/contact" text="Contact" color="#004f04"/>
        </div>
    )
}