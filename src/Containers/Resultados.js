export function Resultados(props) {
    const result = props.result;
   
    const keys = Object.keys(result);
    const elements = keys.map(key => (
        <span key={key}><b>{key}: </b>{result[key]}</span>
    ))
    return (
      <div className="App">
        <header className="App-header">
          <p>Resultados para o CEP 05842-020</p>
          {elements}
          <button>NOVA CONSULTA</button>
        </header>
      </div>
    );
  }

 