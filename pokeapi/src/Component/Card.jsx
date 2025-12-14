import React from 'react'

export const Card = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
                    alt="Pokemon"
                    className="w-full h-48 object-cover bg-gray-100"
                />
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800">Bulbasaur</h2>
                    <p className="text-sm text-gray-600 mb-2">Grass • Poison</p>
                    <div className="flex gap-2">
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">HP: 45</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">ATK: 49</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
