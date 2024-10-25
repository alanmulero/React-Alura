

import { useState } from 'react';
import Banner from './componentes/Banner/Index';
import Formulario from "./componentes/Formulario";

function App() {

  // Criando um estado.
  const [colaboradores, setColaboradors] = useState([]); // useStat de um array vazio. Guardando o colaborador cadastrado.

  // Função para capturar colaborador.
  const colaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
  }
  return (
    <div className="App">
      <Banner />
      {/*Funçao para capturar colaborador. colaborador passa adiante para colaboradoAdicionado  */}
      <Formulario  aoColaboradorCadastrado={item => colaboradorAdicionado(item)}/>

    </div>
  );
}

export default App;
