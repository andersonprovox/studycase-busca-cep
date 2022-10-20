export function Resultados(props) {
    const result = props.result;
    const goTo = props.goto;
    const keys = Object.keys(result);
    const elements = keys.map(key => (
        <span key={key}><b>{key}: </b>{result[key]}</span>
    ))
    return (<>
    
        <p>Resultados para o CEP 05842-020</p>
          {elements}
        <button onClick={() => goTo("PESQUISA")}>NOVA CONSULTA</button>
    
      </>
       
    );
  }

 