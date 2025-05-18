import { Suspense } from 'react'
import { fetchWithTimer } from '../../../handlers/fetchWithTimer'
import SuspenseLoading from '@src/components/suspenseLoading'
import { TFilm } from '@src/types/TFilm'
import FilmList from '@src/components/filmList';
import { colorByDuration } from '@src/app/utils/colorByDuration';
export const dynamic = 'force-dynamic';

export default async function ForceCachePage() {
   const { data, duration } = await fetchWithTimer<TFilm[]>({
      endpoint: 'https://ghibliapi.vercel.app/films/',
      cacheOption: { cache: 'force-cache', next: { tags: ['films'] } },
      httpLib: 'fetch'
   })

   return (
      <Suspense fallback={<SuspenseLoading />}>
         <div className='pt-6'>
            <h1 className="text-xl font-bold mb-1">Cache: <span className='underline'>force-cache</span></h1>
            <p className="text-sm text-gray-500">Tempo de resposta: <span className={`text-xl font-bold ${colorByDuration(duration)}`}>{duration}ms</span></p>

            <FilmList films={data} />
         </div>
      </Suspense>
   )
}
