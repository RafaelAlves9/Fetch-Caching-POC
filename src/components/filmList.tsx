'use client'

import { TFilm } from "../types/TFilm"

export default async function FilmList(films: TFilm[]) {

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {films.map(film => (
            <div key={film.id} className="bg-white shadow rounded p-4">
               <img
                  src={film.image}
                  alt={film.title}
                  className="w-full h-80 object-cover rounded mb-4"
               />
               <h2 className="text-xl font-semibold mb-2">{film.title}</h2>
               <p className="text-gray-600 text-sm">{film.description}</p>
            </div>
         ))}
      </div>
   )
}
