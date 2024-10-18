import './Formulario.css'
import CampoTexto from "../CampoTexto";

const Formulario = () => {
    return (
        <section className="formulario">

            <form className="formulario-form">
                <h2>Preencha o formulário de cadastro</h2>
                <CampoTexto label="Nome" placeholder={"Digite o seu nome"}/>
                <CampoTexto label={"Cargo"} placeholder={"Digite o seu cargo"}/>
                <CampoTexto label={"Empresa"} placeholder={"Digite o nome da empresa"}/>
                <CampoTexto label={"Atividade"} placeholder={"Digite o ramo de atividade da empresa"}/>


            </form>


        </section>


    )
}
export default Formulario;