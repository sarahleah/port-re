import './Shapes.css'

export default function Shapes() {

    function handleColorChange(e) {
        let colors = ["#2e7d32", "#b71c1c", "#1565c0", "#f9a825"]
        let randInd = Math.floor(Math.random() * 4)
        e.target.style.backgroundColor = colors[randInd]
    }

    return (
        <div className="shapes">
            <div className="square-wrap x">
                <div onClick={handleColorChange} className="square y"></div>
            </div>
            <div className="circle-wrap x2">
                <div className="circle y2" onClick={handleColorChange} ></div>
            </div>
        </div>
    )
}