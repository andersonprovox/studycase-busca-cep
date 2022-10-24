import { useState, useEffect } from "react";
import consultarCep from 'cep-promise';
import CEPDados from "../Components/CEPDados";


function numbersOnly(str) {
  return str.replace(/[^\d]/g, '')
}

function translate(cepDados) {
  return {
    "ESTADO": cepDados.state,
    "CIDADE": cepDados.city,
    "BAIRRO": cepDados.neighbothood,
    "LOGRADOURO": cepDados.street
  }
}

export function Pesquisa(props) {

    const goTo = props.goTo;
    const ticket = props.ticket;
    const setResultado = props.setResultado;
    const setErrorMessage = props.setErrorMessage;
    const [cepNumber, setCepNumber] = useState("");
    const [cepFavorito, setCepfavorito] = useState("");
    const [cepDados, setCepDados] = useState({});

    useEffect(() =>{
      const storedCep = localStorage.getItem("cepFavorito") || "";
      setCepfavorito(storedCep);
    },[]);

    useEffect(() => {
      if (!cepFavorito) {
        return;
      }
      localStorage.setItem("cepFavorito", cepFavorito);
      consultarCep(cepFavorito)
      .then(resultado => setCepDados(resultado))
      .catch(err => setCepDados({"ERRO": err.message}))
    }, [cepFavorito])
    
    function handleChange(evt) {
      const value = evt.target.value;
      setCepNumber(numbersOnly(value));
    }

    function handleSuccess(cepDados){

      const resultado = translate(cepDados);

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

    function handleAdicionarFavorito() {
      localStorage.setItem("cepFavorito", cepNumber);
      setCepfavorito(cepNumber);
    }

    return (
      <>
        <p>Qual CEP deseja pesquisar?</p>
        <input value={numbersOnly(cepNumber)} onChange={handleChange}/>
        <button onClick={handleSearch}>PESQUISAR</button>
        <button onClick={handleAdicionarFavorito}>SALVAR FAVORITO</button>
        <br/>
        <p>favorito: {cepFavorito}</p>
        <CEPDados cepDados={cepDados}/>

      </>
    );
  }