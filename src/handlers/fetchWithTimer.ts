import axios, { AxiosResponse } from 'axios';

interface FetchWithTimerProps {
   endpoint: string,
   cacheOption: RequestInit,
   httpLib: 'fetch' | 'axios'
}

export async function fetchWithTimer<T = unknown>(props: FetchWithTimerProps): Promise<{ data: T; duration: number }> {
   const { endpoint, cacheOption, httpLib } = props
   const start = Date.now()
   let res: AxiosResponse<T> | Response

   if (httpLib === 'fetch') {
      res = await fetch(endpoint, cacheOption)
   } else {
      res = await axios.get(endpoint);
   }

   const end = Date.now()
   let data: T;

   if (httpLib === 'fetch') {
      data = await res.json()
   } else {
      data = res.data
   }

   return { data, duration: end - start }
}
