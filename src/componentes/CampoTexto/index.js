// Criando uma const para receber a função.
import './CampoTexto.css'
const CampoTexto = (props) => {
    //const placeHolderModificada = `${props.placeholder}...`;
    return(
        <div className="campoTexto">
            <label>{props.label}</label>
            <input  placeholder={`${props.placeholder}...`}  />
        </div>
    )

}

export default CampoTexto;