import {useState} from 'react';
import Banner from './componentes/Banner/Index';
import Formulario from "./componentes/Formulario";
import Colaboradores from "./componentes/Colaboradores";

function App() {

    // Criando um estado.
    const [colaboradores, setColaboradors] = useState([]); // useStat de um array vazio. Guardando o colaborador cadastrado.
    // Criando uma lista estática
    const continentes = [
        {
            nome: 'África',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9',
        },
        {
            nome: 'América do Norte',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF',
        },
        {
            nome: 'América do Sul',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2',
        },
        {
            nome: 'Ásia',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8',
        },
        {
            nome: 'Oceania',
            corPrimaria: '#FEBA05',
            corSecundaria: '#FFF5D9',
        }


    ];
    // Função para capturar colaborador.
    const colaboradorAdicionado = (colaborador) => {
        console.log(colaborador);
        // Guardando valores em um novo array.
        setColaboradors([...colaboradores, colaborador])
        //console.log(setColaboradors)
    }
    return (
        <div className="App">
            <Banner/>
            {/*Funçao para capturar colaborador. colaborador passa adiante para colaboradoAdicionado  */}
            <Formulario continentes={continentes.map(item => item.nome)} aoColaboradorCadastrado={item => colaboradorAdicionado(item)}/>

            {continentes.map(item => <Colaboradores key={item.nome} nome={item.nome} corPrimaria={item.corPrimaria} corSecundaria={item.corSecundaria}/>)}


        </div>
    );
}

export default App;
