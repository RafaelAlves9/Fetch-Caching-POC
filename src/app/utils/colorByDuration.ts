

export function colorByDuration(duration: number) {
   return duration <= 50 ? 'text-green-500' :
      duration <= 100 ? 'text-yellow-500' :
         duration <= 200 ? 'text-orange-500' :
            'text-red-500'
}