import { Suspense } from 'react'
import { fetchWithTimer } from '../../../handlers/fetchWithTimer'
import SuspenseLoading from '@src/components/suspenseLoading'
import { TFilm } from '@src/types/TFilm'

export default async function RevalidatePage() {
   const { data, duration } = await fetchWithTimer<TFilm[]>(
      'https://ghibliapi.vercel.app/films/',
      { cache: 'force-cache', next: { tags: ['revalidate-films'], revalidate: 10 } }
   )

   return (
      <Suspense fallback={<SuspenseLoading />}>
         <div className='pt-6'>
            <div className="flex items-center gap-2">
               <span className='text-xl font-bold'>Cache:</span>
               <span className='underline text-xl'>revalidate</span>
               <span className='text-sm text-gray-500'>A cada 10s, mas feita em background</span>
            </div>
            <p className="text-sm text-gray-500">Tempo de resposta: <span className={`text-xl font-bold ${duration <= 50 ? 'text-green-500' :
               duration <= 100 ? 'text-yellow-500' :
                  duration <= 200 ? 'text-orange-500' :
                     'text-red-500'
               }`}>{duration}ms</span></p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
               {data.map((film) => (
                  <div key={film.id} className="rounded-xl shadow-md p-2 border">
                     <img src={film.image} alt={film.title} className="rounded-md mb-2" />
                     <h2 className="font-semibold">{film.title}</h2>
                     <p className="text-xs text-gray-600">{film.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </Suspense>
   )
}
