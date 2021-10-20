import './AncButton.css'

export default function ConButton(props) {

    const style = {
        boxShadow: `5px 5px ${props.color}`
    }

    return (
        <a href={props.link} className="ancBtn" style={style} target="_blank" rel="noreferrer">
            {props.text}
        </a>
    )
}