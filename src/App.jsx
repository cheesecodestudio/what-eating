import { useState, useEffect } from 'react'
import { ingredientsDb } from './data/db_ingredients'
import { platesDb } from './data/db_plates'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Ingredients from "./components/Ingredients"
import Plates from "./components/Plates"

function App() {
	const [ingredientsData, setIngredientsData] = useState(ingredientsDb);
	const [platesData, setPlatesData] = useState([]);

	const CheckPlates = plates => {
		if (!plates)
			plates = [...platesData];
		plates.forEach(CheckIngredients);
		setPlatesData(plates);
	}

	const CheckIngredients = plate => {
		plate.CanMake = plate.Ingredients.every((id) => ingredientsData.find(ingredient => ingredient.Id === id).InStock);
	};

	const RemoveIngredientFromPlates = ingredientId => {
		const updatePlates = [...platesData];
		updatePlates.forEach(plate => {
			plate.Ingredients = plate.Ingredients.filter(id => id !== ingredientId);
		});

		setPlatesData(updatePlates);
	}

	useEffect(() => {
		platesDb.forEach(CheckIngredients);
		setPlatesData(platesDb);
	}, []);

	return (
		<>
			<Header></Header>
			<main className="container mx-auto px-4">
				<Plates platesData={platesData} setPlatesData={setPlatesData} ingredientsData={ingredientsData} CheckPlates={CheckPlates}></Plates>
				<Ingredients ingredientsData={ingredientsData} setIngredientsData={setIngredientsData} CheckPlates={CheckPlates} RemoveIngredientFromPlates={RemoveIngredientFromPlates}></Ingredients>
			</main>
			<Footer></Footer>
		</>
	)
}

export default App