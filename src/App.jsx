import Footer from "./components/Footer"
import Header from "./components/Header"
import Ingredients from "./components/Ingredients"
import Plates from "./components/Plates"

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto px-4">
        <Ingredients></Ingredients>
        <Plates></Plates>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
