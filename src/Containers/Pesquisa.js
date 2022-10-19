export function Pesquisa(props) {

    const textoTopo = props.textoTopo;
    return (
      <div className="App">
        <header className="App-header">
          
          <p>{textoTopo}</p>
          <input type="text" />
          <button>PESQUISAR</button>
          
        </header>
      </div>
    );
  }