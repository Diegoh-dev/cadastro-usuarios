import React, { useState, useRef, useEffect } from "react";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trach.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import {
  Container,
  Image,
  Button,
  User,
} from "./styles";
import { H1 } from "../../components/Title/styles";
import { ContainerItens } from '../../components/ContainerItens/styles'


const Users = () => {
  const [users, setUser] = useState([]);
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



  // - REACT HOOK => USEEFFECT (EFEITO COLATERAL)
  // - A MINHA APLICAÇÃO INICIA ( A PÁGINA CARREGOU, USEEFFECT É CHAMADO)
  // - QUANDO UM ESTADO QUE ESTÁ NO ARRAY E DEPENDENCIA DO USEEFFECT É ALTERADO.

  useEffect(() => {
    async function fetchApiUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3002/users");
      setUser(newUsers);
    }

    fetchApiUsers();
  }, []);

  async function deleteUsers(userId) {
    await axios.delete(`http://localhost:3002/users/${userId}`);
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
  const navigate = useNavigate()

  function goHistory(){
    // history.goBack()
    navigate('/')
  }

  return (
    <Container>
      <Image src={Avatar} alt="logo-image" />
      <ContainerItens isBlur={true}>
      <H1>
      Usuários
      </H1>
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
{/* to='/' */}
        <Button onClick={goHistory}>
        <img src={Arrow} alt="arrow" /> Voltar 
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default Users;
