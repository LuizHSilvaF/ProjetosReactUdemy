import './App.css'

import City from './assets/city.jpg'
import ListRander from './components/ListRander'
import ManageData from './components/ManageData'

function App() {
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
    </div>
  )
}

export default App
