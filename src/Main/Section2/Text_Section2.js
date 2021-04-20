import P from "../Footer/P"
import H2 from "./H2"

const TextSection2 = ({textH2, text1, text2 }) => {
    return (
        <div className = "text_section2">
            <H2 text = {textH2} />
            <P id = "black" text = {text1}/>
            <P text = {text2}/>
            
        </div>

    )
}

export default TextSection2