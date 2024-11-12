import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    {id: 1, brand: "Ford", km: 0, color: "Blue"},
    {id: 2, brand: "Ferrari", km: 10000, color: "Green"},
    {id: 3, brand: "Nissan", km: 123445, color: "Red"}
  ] 

  return (
    <div className='App'>
      <h1>Carros</h1>
      <div className='car-container'>
      {cars.map((car) =>(
        <CarDetails key = {car.id} car = {car}/>
      ))}
      </div>
    </div>
  )
}

export default App
