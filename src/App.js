
import './App.css';
import { useState } from 'react';
import  { Pesquisa }  from './Containers/Pesquisa';
import { Resultados} from './Containers/Resultados';
import { Carregando} from './Containers/Carregando';
import { Erro } from './Containers/Erro';


function App() {
  const [nomeTela, setNometela] = useState("PESQUISA");
  function goTo(nomeTela) {
    setNometela(nomeTela);
  }
  useState(0);
  return <div>
    
    <div className="App">
      <header className="App-header">
      <button onClick={ goTo }>Proxima Tela</button>
        {nomeTela === "PESQUISA" ? <Pesquisa goTo={goTo}/> : null}
        {nomeTela === "RESULTADOS" ? <Resultados result={{}}/> : null}
        {nomeTela === "ERRO" ? <Erro errorMessage="Não foi possível completar a operação"/> : null}
        {nomeTela === "CARREGANDO" ? <Carregando goTo={goTo}/> : null}
      </header>
    </div>
  </div>
}
export default App;
