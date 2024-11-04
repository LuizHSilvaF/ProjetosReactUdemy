import {useState } from 'react'
import './App.css'

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender'
import ListRander from './components/ListRander'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  const [userName] = useState("Pedro");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Nissan", color: "Preta", newCar: false, km: 32446},
    {id: 3, brand: "BMW", color: "Branca", newCar: true, km: 0}
  ]

  const users = [
    {id:1, nome:"Luiz", age:19, profissao:"TI"},
    {id:2, nome:"Pedro", age:20, profissao:"Medico"},
    {id:3, nome:"Ana", age:16, profissao:"Enf"}
  ]

  function showMessage() {
    console.log("Evento componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="cidade" />
      </div>
      <ManageData/>
      <ListRander/>
      <ConditionalRender/>
      {/*props*/}
      <ShowUserName name={userName} />
      {/*destructuring*/}
      <CarDetails brand="VW" km={1000000} color="Azul" newCar={false}/>
      {/* reaproveitando*/}
      <CarDetails brand="Ford" km={50000} color="Vermelha" newCar={true}/>
      <CarDetails brand="Nissan" km={10000} color="Cinza" newCar={false}/>
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/*fragment*/}
      <Fragments propFragment="teste"/>
      {/*children*/}
      <Container myValue="Testing"> 
        <p>E esse é o conteúdo</p>
      </Container>
      <Container myValue="Testing 2"> 
        <p>Testando o Container</p>
      </Container>
      {/*executar função*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*state lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
      {/*desafio*/}
      {users.map((user)=> (
        <UserDetails 
          key={user.id}
          nome={user.nome}
          age={user.age}
          profissao={user.profissao}
        />
      ))}
      
    </div>
  );
}

export default App
