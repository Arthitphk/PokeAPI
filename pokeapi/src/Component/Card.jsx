import React from 'react'

export const Card = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <div className="bg-gradient-to-b from-blue-400 to-blue-200 h-40 rounded-lg mb-4 flex items-center justify-center">
            <img src="" alt="pokemon" className="h-32 w-32 object-contain" />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Pokemon Name</h2>
        <p className="text-gray-600 text-sm mb-4">Type: Normal</p>
        <div className="flex gap-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">HP: 45</span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">ATK: 49</span>
        </div>
    </div>
  )
}
