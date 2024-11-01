import { useState } from 'react'
import './App.css'

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender'
import ListRander from './components/ListRander'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const [userName] = useState("Pedro");

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
      <CarDetails brand="VW" km={1000000} color="Azul" />
    </div>
  )
}

export default App
