import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
    const paises = ['África','América do Norte','América do Sul','Ásia','Oceania']
    return (
        <section className="formulario">

            <form className="formulario-form">
                <h2>Preencha o formulário de cadastro</h2>
                <CampoTexto label="Nome" placeholder={"Digite o seu nome"}/>
                <CampoTexto label={"Cargo"} placeholder={"Digite o seu cargo"}/>
                <CampoTexto label={"Empresa"} placeholder={"Digite o nome da empresa"}/>
                <CampoTexto label={"Atividade"} placeholder={"Digite o ramo de atividade da empresa"}/>
                <ListaSuspensa label={'Selecione o continente:'} itens={paises}/>
                <Botao  texto="Criar Card"/>
            </form>


        </section>


    )
}
export default Formulario;