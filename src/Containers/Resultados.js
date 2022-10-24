
import CEPDados from "../Components/CEPDados";

export function Resultados(props) {
    const result = props.result;
    const goTo = props.goto;
    
    return (<>
    
        <p>Resultados para o CEP {result.cep}</p>
          <CEPDados cepDados={result}/>
        <button onClick={() => goTo("PESQUISA")}>NOVA CONSULTA</button>
    
      </>
       
    );
  }

 