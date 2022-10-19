
import './App.css';
import  { Pesquisa }  from './Containers/Pesquisa';
import { Resultados} from './Containers/Resultados';
import { Carregando} from './Containers/Carregando';
import { Erro } from './Containers/Erro';


function App() {
  return <Resultados result={
    {
      "RUA": "Arthur Bliss",
      "CIDADE": "São Paulo"
    }
  }/>
}
export default App;
