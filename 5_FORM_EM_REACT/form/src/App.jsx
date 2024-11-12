import './App.css'
import MyForm from './components/MyForm'

function App() {
   return (
    <>
      <h1>Forms</h1>
      <MyForm user={{name: "Luiz", email: "luiz@gmail.com", bio: "Bio", role: "selecione"}}/>
    </>
  )
}

export default App
