import './AncButton.css'
import { Link } from 'react-router-dom'

export default function AncButton(props) {

    const style = {
        boxShadow: `5px 5px ${props.color}`
    }

    return (
        <Link to={props.link} className="ancBtn" style={style}>
            {props.text}
        </Link>
    )
}