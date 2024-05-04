import { useState } from 'react'
import { ingredientsDb } from './data/db_ingredients'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Ingredients from "./components/Ingredients"
import Plates from "./components/Plates"

function App() {
	const [ingredientsData, setIngredientsData] = useState(ingredientsDb);

  return (
    <>
      <Header></Header>
      <main className="container mx-auto px-4">
        <Ingredients ingredientsData={ingredientsData} setIngredientsData={setIngredientsData}></Ingredients>
        <Plates></Plates>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
