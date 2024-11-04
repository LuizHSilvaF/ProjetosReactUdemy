import './app.css'
import MyComponent from './components/MyComponent'

export function App() {
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
    </div>
  )
}
