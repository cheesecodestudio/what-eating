import React from 'react'

const Plates = () => {
  return (
    <>
      <h1 className='text-2xl font-bold underline text-purple-700'>Plates</h1>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Type</th>
            <th scope="col" className="px-6 py-3">Can you make?</th>
            <th scope="col" className="px-6 py-3">Ingredients</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Chicken Burrito
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              April 26th, 2024
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Meat
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Yes
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Chicken</span>
              <span class="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Cornflour</span>
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <button type="submit" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Edit</button>
              <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Remove</button>
            </th>
          </tr>
          <tr className="bg-white border-b ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Chicken Burrito
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              April 26th, 2024
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Meat
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Yes
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Chicken</span>
              <span class="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Cornflour</span>
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <button type="submit" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Edit</button>
              <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Remove</button>
            </th>
          </tr>
          <tr className="bg-white border-b ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Chicken Burrito
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              April 26th, 2024
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Meat
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Yes
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Chicken</span>
              <span class="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Cornflour</span>
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <button type="submit" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Edit</button>
              <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Remove</button>
            </th>
          </tr>
          <tr className="bg-white border-b ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Chicken Burrito
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              April 26th, 2024
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Meat
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Yes
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Chicken</span>
              <span class="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Cornflour</span>
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <button type="submit" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Edit</button>
              <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Remove</button>
            </th>
          </tr>
          <tr className="bg-white border-b ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Chicken Burrito
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              April 26th, 2024
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Meat
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Yes
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Chicken</span>
              <span class="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Cornflour</span>
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <button type="submit" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Edit</button>
              <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Remove</button>
            </th>
          </tr>
        </tbody>
      </table>
      <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900">1-10</span> of <span class="font-semibold text-gray-900 ">1000</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
          </li>
        </ul>
      </nav>

      <div className='border-b px-5'>
        <form action="" className='mt-5'>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div className='flex items-center'>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                id="name-field"
                name='Name'
                type="text"
                placeholder="Banana"
                required
              />
            </div>

            <div className='flex items-center'>
              <input id="exist-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" name='Exist' />
              <label for="exist-checkbox" className="ms-2 text-sm font-medium text-gray-900">Exist</label>
            </div>

            <div className='flex items-center'>
              <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Add</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Plates