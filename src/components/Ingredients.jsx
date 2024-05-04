import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faPen, faSquareCheck, faSquareXmark, faTrash } from '@fortawesome/free-solid-svg-icons'
import { generarId } from '../utils/utils.cjs'


const Ingredients = ({ ingredientsData, setIngredientsData }) => {
	const [Name, setName] = useState('')
	const [CreateDate, setCreateDate] = useState('')
	const [Id, setId] = useState('')
	const [InStock, setInStock] = useState(false)

	const isCreate = () => Id === '';

	const AddIngredient = e => {
		e.preventDefault()
		let ingredientExist = ingredientsData.findIndex(ingredient => ingredient.Id === Id);

		if (ingredientExist >= 0) {
			const updateIngredients = [...ingredientsData];
			updateIngredients[ingredientExist].Name = Name;
			updateIngredients[ingredientExist].InStock = InStock;
			setIngredientsData(updateIngredients);
		}
		else {
			let newIngredient = {
				Id: generarId(),
				Name,
				CreateDate,
				InStock
			};
			setIngredientsData([newIngredient, ...ingredientsData])
		}

		//clean inputs
		setId('');
		setName('');
		setCreateDate('');
		setInStock(false);
	}

	const EditIngredient = (id) => {
		const ingredient = ingredientsData.find(ingredient => ingredient.Id === id);
		setId(ingredient.Id);
		setName(ingredient.Name);
		setCreateDate(ingredient.CreateDate);
		setInStock(ingredient.InStock);
	}

	const RemoveIngredient = (id) => {
		const ingredient = ingredientsData.find(ingredient => ingredient.Id === id);
		const answer = confirm(`Would you like to remove "${ingredient.Name}" ingredient?`)
		if (answer) {
			const removeIngredint = ingredientsData.filter(i => i.Id !== ingredient.Id);
			setIngredientsData(removeIngredint);
		}
	}

	return (
		<>
			<h1 className='text-2xl font-bold underline text-purple-700'>Ingredients</h1>
			<form action="" onSubmit={AddIngredient}>
				<table className='w-full text-lg text-left rtl:text-right text-gray-500'>
					<thead className='text-2xl text-gray-700 uppercase bg-gray-50 text-center'>
						<tr>
							<th scope="col" className="px-6 py-3">Name</th>
							<th scope="col" className="px-6 py-3">Date</th>
							<th scope="col" className="px-6 py-3">In Stock</th>
							<th scope="col" className="px-6 py-3">Actions</th>
						</tr>
					</thead>
					<tbody>
						{ingredientsData.map(data => (
							<tr key={data.Id} className="bg-white border-b  text-center">
								<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
									{data.Name}
								</td>
								<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
									{data.CreateDate}
								</td>
								<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
									{data.InStock ?
										<FontAwesomeIcon icon={faSquareCheck} className='text-green-800 px-2.5 py-0.5' size='2xl' /> :
										<FontAwesomeIcon icon={faSquareXmark} className='text-pink-800 px-2.5 py-0.5' size='2xl' />
									}
								</td>
								<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
									<button type="button" onClick={() => EditIngredient(data.Id)} className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 focus:outline-none">
										<FontAwesomeIcon icon={faPen} />
									</button>
									<button type="button" onClick={() => RemoveIngredient(data.Id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 focus:outline-none">
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</td>
							</tr>
						))}
						<tr key={'formIngredient'} className="bg-white border-b  text-center">
							<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								<input
									className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
									id="name-field"
									name='Name'
									type="text"
									placeholder="Banana"
									value={Name}
									onChange={e => setName(e.target.value)}
									required
								/>
							</td>
							<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								<input
									className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
									id="name-field"
									name='CreateDate'
									type="date"
									value={CreateDate}
									onChange={e => setCreateDate(e.target.value)}
									disabled={!isCreate()}
									required
								/>
							</td>
							<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								<input
									id="in-stock-checkbox"
									type="checkbox" value=""
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
									name='InStock'
									checked={InStock}
									onChange={e => setInStock(e.target.checked)}
								/>
								<label htmlFor="in-stock-checkbox" className="ms-2 font-medium text-gray-900">In Stock</label>
							</td>
							<td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
								<button
									type="submit"
									className={`text-white ${isCreate() ? "bg-green-700 hover:bg-green-800 focus:ring-green-300" : "bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300"} focus:ring-4  font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 focus:outline-none`}
								>
									<FontAwesomeIcon icon={isCreate() ? faAdd : faPen} />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
			<nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
				<span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900 ">1000</span></span>
				<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
					<li>
						<a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
					</li>
					<li>
						<a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Ingredients