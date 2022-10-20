import { useState } from "react";

function numbersOnly(str) {
  return str.place(/[^\d]/g, '')
}

export function Pesquisa(props) {

    const goTo = props.goTo;
    const [cepNumber, setCepNumber] = useState("");

    function handleChange(evt) {
      const value = evt.target.value;
      setCepNumber(numbersOnly(value));
    }

    function clear() {
      setCepNumber("");
    }

    return (
      <>
        <p>Qual CEP deseja pesquisar?</p>
        <p>Estado Atual: {cepNumber}</p>
        <input value={numbersOnly(cepNumber)} onChange={handleChange}/>
        <button onClick={clear}>Limpar state</button>
        <button onClick={()=> goTo("CARREGANDO")}>PESQUISAR</button>

      </>
    );
  }