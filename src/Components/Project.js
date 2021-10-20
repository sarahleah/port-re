import './Project.css'
import ConButton from './ConButton'

export default function Project(props) {
    return (
        <section className="project-outer">
            <div className="project-inner">
                <div className="project-front">
                <img src={props.img} alt=""/>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <h5>Stack:</h5>
                <p>{props.stack.join(' + ')}</p>
                </div>
                <div className="project-back">
                    <ConButton link={props.live} text="See it Live" color="#b71c1c"/>
                    <ConButton link={props.github} text="See the Code" color="#f9a825"/>
                </div>
            </div>
        </section>
    )
}