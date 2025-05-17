// lib/fetchWithTimer.ts
export async function fetchWithTimer<T = unknown>(
   endpoint: string,
   cacheOption: RequestInit
): Promise<{ data: T; duration: number }> {
   const start = Date.now()

   const res = await fetch(endpoint, cacheOption)

   const end = Date.now()
   const data = (await res.json()) as T

   return { data, duration: end - start }
}
