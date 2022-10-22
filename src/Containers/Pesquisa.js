import { useState } from "react";
import consultarCep from 'cep-promise';

function numbersOnly(str) {
  return str.replace(/[^\d]/g, '')
}

export function Pesquisa(props) {

    const goTo = props.goTo;
    const ticket = props.ticket;
    const setResultado = props.setResultado;
    const setErrorMessage = props.setErrorMessage;
    const [cepNumber, setCepNumber] = useState("");
    
    function handleChange(evt) {
      const value = evt.target.value;
      setCepNumber(numbersOnly(value));
    }

   

    function handleSuccess(dadosCEP){

      const resultado = {
        "ESTADO": dadosCEP.state,
        "CIDADE": dadosCEP.city,
        "BAIRRO": dadosCEP.neighbothood,
        "LOGRADOURO": dadosCEP.street
      }

      setResultado(resultado);
      goTo("RESULTADOS");
    }

    function handleError(err) {
      const errorMessage = err.message;
      setErrorMessage(errorMessage);
      goTo("ERRO");
    }

    function handleSearch(){
      ticket.current++;
      const currentTicket = ticket.current;
      goTo("CARREGANDO");
      consultarCep(cepNumber)
      .then(result => currentTicket == ticket.current && handleSuccess(result))
      .catch(err => currentTicket == ticket.current && handleError(err))
    }

    function handleAdicionarFAvorito() {
      localStorage.setItem("cepFavorito", cepNumber);
    }

    return (
      <>
        <p>Qual CEP deseja pesquisar?</p>
        <input value={numbersOnly(cepNumber)} onChange={handleChange}/>
        <button onClick={handleSearch}>PESQUISAR</button>
        <button onClick={handleAdicionarFAvorito}>SALVAR FAVORITO</button>

      </>
    );
  }