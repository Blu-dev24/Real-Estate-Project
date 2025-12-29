import React, { useState, useEffect } from 'react'
import { cardItems } from '../constant/data'

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const value = query.trim().toLowerCase()

    if (!value) {
      setResults([])
      return
    }

    const filtered = cardItems.filter(item =>
      item.location.toLowerCase().includes(value)
    )

    setResults(filtered)
  }, [query])

  return (
    <section className="section min-h-screen py-[90px] my-[50px]">
      {/* Search Input */}
      <div className="flex justify-center">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter location"
          className="outline-2 outline-green-900 w-[350px] h-[45px] text-[18px] rounded-full p-5"
        />
        {/* <button className='' onClick={}></button> */}
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {results.map(item => (
          <div key={item.id} className="border rounded-xl p-4">

            <img
              src={item.imgURL}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-xl rounded-xl"
            />

            <div className="mt-4">
              <div className="flex justify-between">
                <h3 className="font-bold text-[#00163D]">{item.name}</h3>
                <span className="font-bold">{item.price}</span>
              </div>

              <p className="text-sm">{item.location}</p>

              <div className="grid grid-cols-3 mt-4 text-sm">
                <p>{item.bed}</p>
                <p>{item.bath}</p>
                <p>{item.area}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Empty State */}
      {query && results.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No properties found for “{query}”
        </p>
      )}

    </section>
  )
}

export default Search

