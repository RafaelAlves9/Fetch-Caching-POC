export default function SuspenseLoading() {
   return (
      <div className="p-6 animate-pulse">
         <h1 className="text-xl font-bold mb-2">Carregando...</h1>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
               <div key={i} className="rounded-xl border shadow p-4 space-y-2">
                  <div className="h-48 bg-gray-200 rounded-md" />
                  <div className="h-4 bg-gray-300 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
               </div>
            ))}
         </div>
      </div>
   )
}
