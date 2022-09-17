import React, { useState, useRef } from "react";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

const App = () => {
  const [users, setUser] = useState([]);
  const InputName = useRef();
  const inputAge = useRef();
  // const [name, setName] = useState();
  // const [age, setAge] = useState();
  const titulo = useRef();

  //OBS: USEEFFECT NÃO ACEITA ASYNC(DEVE COLOCAR DENTRO DE OUTRA FUNÇÃO)
  //ISSO NÃO PODE SER FEITO NO USEEFFECT
  // useEffect(async function requisicaoGet() {
  //   const { data: newUsers } = await axios.get("http://localhost:3002/users");
  //   setUser(newUsers);
  // }, []);

  //O QUE DEVE SER FEITO

  async function addNewUser() {
    // primeiro é o enderoço da api, e segundo os paramentros que api precisa.
    const { data: newUser } = await axios.post("http://localhost:3002/users", {
      name: InputName.current.value,
      age: inputAge.current.value,
    });

    setUser([...users, newUser]);
  }

  // goBack => navega para a pagina anterior
  // push => navega para o caminho que for especificado.

  const history = useHistory();
  function navegandoParaProximaPage() {
    history.push("/usuarios");
  }
  console.log(history);
  return (
    <Container>
      <Image src={People} alt="logo-image" />
      <ContainerItens>
        <H1 ref={titulo}>Olá</H1>
        <InputLabel>Nome:</InputLabel>
        <Input placeholder="Nome" ref={InputName} />
        <InputLabel>Age:</InputLabel>
        <Input placeholder="Idade" ref={inputAge} />
        {/* to='/usuarios' */}
        <Button
          onClick={() => {
            addNewUser();
            navegandoParaProximaPage();
          }}
        >
          Cadastrar <img src={Arrow} alt="arrow" />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
