import './AncButton.css'

import useClipboard from 'react-use-clipboard'

export default function AncButton(props) {

    let [isCopied, setCopied] = useClipboard("sarah.leah.andreas@gmail.com")

    let style = {
        boxShadow: `5px 5px ${props.color}`,
    }

    return (
        <button 
            className="ancBtn" 
            style={style} 
            onClick={setCopied}>
            <p>{isCopied ? 'Copied!' : 'Email' }</p>
        </button>
    )
}