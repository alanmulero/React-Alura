import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
    const paises = ['África','América do Norte','América do Sul','Ásia','Oceania']
    const aoSalvar = (evento) => {
        evento.preventDefault();// Alterando comportamento padrão.
        console.log('Formulario submetido');
    }



    return (
        <section className="formulario">

            <form onSubmit={aoSalvar} className="formulario-form">
                <h2>Preencha o formulário de cadastro</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder={"Digite o seu nome"}/>
                <CampoTexto obrigatorio={true} label={"Cargo"} placeholder={"Digite o seu cargo"}/>
                <CampoTexto label={"Empresa"} placeholder={"Digite o nome da empresa"}/>
                <CampoTexto  label={"Atividade"} placeholder={"Digite o ramo de atividade da empresa"}/>
                <ListaSuspensa label={'Selecione o continente:'} itens={paises}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>


        </section>


    )
}
export default Formulario;