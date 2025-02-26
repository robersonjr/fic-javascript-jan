import Header from "./Components/Header"
import Banner from "./Components/Banner"
import "./App.css";


function App() {


  return (
    <>
    <div className="container">
      <Header title = "Logo New" subTitle = "Outros" />

      <Banner>
        <h1>Bem vindo ao meu site</h1>
        <p>Aqui você encontra as melhores oportunidades.</p>
      </Banner>
      <h1>Seja bem vindo</h1>

    </div>
    </>
  )
}

export default App
