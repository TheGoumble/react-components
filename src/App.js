
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <>
      <Header/>
      <div id="page-content">
        <Hero/>
        <Main />
      </div>
      <Footer />
    </>
  )
}

export default App
