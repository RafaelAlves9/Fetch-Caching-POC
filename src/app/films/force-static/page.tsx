import { Suspense } from 'react'
import { fetchWithTimer } from '../../../handlers/fetchWithTimer'
import SuspenseLoading from '@src/components/suspenseLoading'
import { TFilm } from '@src/types/TFilm'
import FilmList from '@src/components/filmList';
import { colorByDuration } from '@src/app/utils/colorByDuration';

export const dynamic = 'force-static';

export default async function ForceStaticPage() {
   const { data, duration } = await fetchWithTimer<TFilm[]>({
      endpoint: 'https://ghibliapi.vercel.app/films/',
      cacheOption: { cache: 'force-cache' },
      httpLib: 'fetch'
   })

   return (
      <Suspense fallback={<SuspenseLoading />}>
         <div className='pt-6'>
            <h1 className="text-xl font-bold mb-1">Cache: <span className='underline'>force-static</span></h1>
            <div className='flex gap-2 items-center'>
               <p className='text-sm text-gray-500'>Primeira renderização:</p>
               <p className={`text-xl font-bold ${colorByDuration(duration)}`}>
                  {duration}ms
               </p>
            </div>
            <div className='flex gap-2 items-center'>
               <p className='text-sm text-gray-500'>Renderização subsequente:</p>
               <p className={`text-xl font-bold text-green-500`}>
                  0 ms
               </p>
            </div>

            <FilmList films={data} />
         </div>
      </Suspense>
   )
}
