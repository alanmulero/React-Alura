import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from 'react';

const Formulario = () => {
    const paises = ['África', 'América do Norte', 'América do Sul', 'Ásia', 'Oceania']

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [atividade, setAtividade] = useState('');
    const [continente, setContinente] = useState('');


    // Estado  elevado, no formulario.
    // Para manter um estado dentro da função.
    //const [valor, setValor] = useState('');   // retorna um array com valor e setter. Conforme valor muda, muda estado.



    const aoSalvar = (evento) => {
        evento.preventDefault();// Alterando comportamento padrão.
        console.log('Formulario submetido com os valores:', nome, cargo, empresa, atividade, continente);
    }



    return (
        <section className="formulario">

            <form onSubmit={aoSalvar} className="formulario-form">
                <h2>Preencha o formulário de cadastro</h2>

                <CampoTexto obrigatorio={true} label="Nome"
                    valor={nome}
                    quandoDigitado={valor => setNome(valor)}
                    placeholder={"Digite o seu nome"} />

                <CampoTexto obrigatorio={true}
                    valor={cargo}
                    quandoDigitado={valor => setCargo(valor)}
                    placeholder={"Digite o seu cargo"}
                    label={"Cargo"} />

                <CampoTexto label={"Empresa"}
                    valor={empresa}
                    quandoDigitado={valor => setEmpresa(valor)}
                    placeholder={"Digite o nome da empresa"} />

                <CampoTexto label={"Atividade"}
                    valor={atividade}
                    quandoDigitado={valor => setAtividade(valor)}

                    placeholder={"Digite o ramo de atividade da empresa"} />


                <ListaSuspensa label={'Selecione o continente:'} itens={paises} valor={continente}
                quandoDigitado={valor => setContinente(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>


        </section>


    )
}
export default Formulario;