
export function Erro(props) {
    return (
      <>
        <p>Erro na consulta</p>
        <p>{props.errorMessage}</p>
        <button onClick={() => props.goTo("PESQUISAR")}>VOLTAR</button>
      </>
    );
  } 