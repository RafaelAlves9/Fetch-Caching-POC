import { TFilm } from "../types/TFilm"

export default async function FilmList({ films }: { films: TFilm[] }) {

   return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
         {films.map((film) => (
            <div key={film.id} className="rounded-xl shadow-md p-2 border border-gray-200 hover:border-gray-300 transition-all duration-300 scale-100 hover:scale-105">
               <img src={film.image} alt={film.title} className="rounded-md mb-2 w-full h-40 object-cover" />
               <h2 className="font-semibold">{film.title}</h2>
               <p className="text-xs text-gray-600">{film.description}</p>
            </div>
         ))}
      </div>
   )
}
