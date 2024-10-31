//components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import MyComponent from './components/MyComponent'
import Challenge from './components/Challenge'

// style / CSS
import './App.css'

function App() {
  return (
    <div className='App'>
      <TemplateExpressions/>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  )
}

export default App
