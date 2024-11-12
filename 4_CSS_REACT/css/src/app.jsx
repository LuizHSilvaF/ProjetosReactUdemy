import './app.css'
import MyComponent from './components/MyComponent'
import {useState} from 'react'
import Title from './components/Title';

export function App() {
  const n = 5;
  const [nome] = useState("Luiz");
  const redTitle = true;

  return (
    <div>
      {/*css global*/}
      <h1>React com CSS</h1>
      {/*css de componente*/}
      <MyComponent />
      <p>teste</p>
      {/*inline CSS*/}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/*css inline dinâmico*/}
      <h2 style={n > 10 ? {color:"black"} : {color:"red"}}>CSS Inline Dinâmico</h2>
      <p style={nome === "Luiz" ? {color:"green", backgroundColor:"yellow"} : null}>Nome: {nome}</p>
      {/*classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/*css modules*/}
      <Title/>
    </div>
  )
}
