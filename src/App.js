
import './App.css';
import { useState, useRef } from 'react';
import  { Pesquisa }  from './Containers/Pesquisa';
import { Resultados} from './Containers/Resultados';
import { Carregando} from './Containers/Carregando';
import { Erro } from './Containers/Erro';


function App() {
  const [nomeTela, setNometela] = useState("PESQUISA");
  const [resultado, setResultado] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const ticket = useRef(1);

  function goTo(nomeTela) {
    setNometela(nomeTela);
  }
  
  return <div>
    
    <div className="App">
      <header className="App-header">
      <button onClick={ goTo }>Proxima Tela</button>
        {nomeTela === "PESQUISA" ? <Pesquisa goTo={goTo} setResultado={setResultado} setErrorMessage={setErrorMessage} ticket={ticket} /> : null}
        {nomeTela === "RESULTADOS" ? <Resultados result={resultado}/> : null}
        {nomeTela === "ERRO" ? <Erro ErrorMessage={errorMessage}/> : null}
        {nomeTela === "CARREGANDO" ? <Carregando goTo={goTo} ticket={ticket} /> : null}
      </header>
    </div>
  </div>
}
export default App;
