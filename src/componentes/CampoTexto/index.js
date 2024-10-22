// Criando uma const para receber a função.
import './CampoTexto.css'
const CampoTexto = (props) => {
    //const placeHolderModificada = `${props.placeholder}...`;
    // props.obrigatorio pega validação do html. Validação nativa combinada com React
    let valorDigitado = 'Jujuba';
    const quandoDigitado = (evento) => {
        valorDigitado = evento.target.value;
        console.log(valorDigitado)} // capturando input
    return(
        <div className="campoTexto">
            <label>{props.label}</label>
            <input value={valorDigitado} onChange={quandoDigitado}  required={props.obrigatorio} placeholder={`${props.placeholder}...`}  />
        </div>
    )

}

export default CampoTexto;