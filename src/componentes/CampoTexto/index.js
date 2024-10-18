// Criando uma const para receber a função.
import './CampoTexto.css'
const CampoTexto = () => {
    return(
        <div className="campoTexto">
            <label>Nome</label>
            <input  placeholder="Digite o nome..."  />
        </div>
    )

}

export default CampoTexto;