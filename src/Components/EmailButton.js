import './AncButton.css'
import { useState } from 'react'

export default function AncButton(props) {

    let [text, setText] = useState(props.text)

    let style = {
        boxShadow: `5px 5px ${props.color}`,
        userSelect: 'text'
    }

    const showEmail = () => {
        setText('sarah.leah.andreas@gmail.com')
        style = {
            ...style,
        }
    }

    return (
        <button className="ancBtn" style={style} onClick={showEmail}>
            <p>{text}</p>
        </button>
    )
}