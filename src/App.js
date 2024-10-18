

import Banner from './componentes/Banner/Index';
import CampoTexto from './componentes/CampoTexto';
function App() {
  return (
    <div className="App">
      <Banner />
        <CampoTexto  label="Nome" placeholder={"Digite o seu nome"} />
        <CampoTexto  label={"Cargo"} placeholder={"Digite o seu cargo"}/>
        <CampoTexto  label={"Empresa"} placeholder={"Digite o nome da empresa"}/>
        <CampoTexto  label={"Atividade"} placeholder={"Digite o ramo de atividade da empresa"}/>

    </div>
  );
}

export default App;
