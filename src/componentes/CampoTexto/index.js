// Criando uma const para receber a função.
import { useState } from 'react';
import './CampoTexto.css'
const CampoTexto = (props) => {
    //const placeHolderModificada = `${props.placeholder}...`;
    // props.obrigatorio pega validação do html. Validação nativa combinada com React
    // Tudo isso tem que ficar em um campo mais elevado, no formulario.
    // Para manter um estado dentro da função.

    const quandoDigitado = (evento) => {
        props.quandoDigitado(evento.target.value);
    }

    return (
        <div className="campoTexto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={evento => props.quandoDigitado(evento.target.value)} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
        </div>
    )

}

export default CampoTexto;