import React, { useState, useRef } from "react";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trach.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

const App = () => {
  const [users, setUser] = useState([]);
  const InputName = useRef();
  const inputAge = useRef();
  // const [name, setName] = useState();
  // const [age, setAge] = useState();
  const titulo = useRef();

  function addNewUser() {
    setUser([
      ...users,
      {
        id: Math.random(),
        name: InputName.current.value,
        age: inputAge.current.value,
      },
    ]);
  }

  function deleteUsers(userId) {
    const newUsers = users.filter((user) => user.id !== userId);

    setUser(newUsers);
  }
  //TROCANDO O USESTAGE/ONCHANGE PELO USEREF()
  // function changeInputName(event) {
  //   setName(event.target.value);
  // }

  // function changeInputAge(event) {
  //   setAge(event.target.value);
  // }

  return (
    <Container>
      <Image src={People} alt="logo-image" />
      <ContainerItens>
        <H1 ref={titulo}>Olá</H1>
        <InputLabel>Nome:</InputLabel>
        <Input placeholder="Nome" ref={InputName} />
        <InputLabel>Age:</InputLabel>
        <Input placeholder="Idade" ref={inputAge} />

        <Button onClick={addNewUser}>
          Cadastrar <img src={Arrow} alt="arrow" />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUsers(user.id)}>
                <img src={Trash} alt="Lata de lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
