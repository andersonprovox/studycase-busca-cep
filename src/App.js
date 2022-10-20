
import './App.css';
import { useState } from 'react';
import  { Pesquisa }  from './Containers/Pesquisa';
import { Resultados} from './Containers/Resultados';
import { Carregando} from './Containers/Carregando';
import { Erro } from './Containers/Erro';


function App() {
  let numeroTela = 0;
  function handleClick() {
    alert('Esse botão foi cricado')
  }
  useState(0);
  return <div>
    <button onClick={ handleClick }>Proxima Tela</button>
    {numeroTela == 0 ? <Pesquisa/> : null}
  </div>
}
export default App;
